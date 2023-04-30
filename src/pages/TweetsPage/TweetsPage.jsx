import { BackLink } from 'components/BackLink/BackLink';
import { AppTweets } from 'components/AppTweets/AppTweets';
import { getUsers } from 'fetchAPI/fetchAPI';
import { useEffect, useState } from 'react';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { useLocation } from 'react-router-dom';
import { Filter } from 'components/Filter/Filter';

export const TweetsPage = () => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const [status, setStatus] = useState('all');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getUsers().then(data => {
      if (status === 'all') {
        const sliced = data.slice(0, 3 * page);
        setUsersList(sliced);
        if (page < data.length / 3) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      } else if (status === 'following') {
        const following = data.filter(
          item => JSON.parse(window.localStorage.getItem(item.id)) === true
        );
        const followingList = following.slice(0, 3 * page);
        setUsersList(followingList);
        if (page < following.length / 3) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      } else if (status === 'follow') {
        const follow = data.filter(
          item => JSON.parse(window.localStorage.getItem(item.id)) === false
        );
        const followList = follow.slice(0, 3 * page);
        setUsersList(followList);
        if (page < follow.length / 3) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      }
    });
  }, [page, status]);

  const onBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  const changeStatus = evt => {
    const currentButton = evt.target.name;
    setPage(1);

    if (currentButton === 'following') {
      setStatus('following');
    } else if (currentButton === 'follow') {
      setStatus('follow');
    } else {
      setStatus('all');
    }
  };

  return (
    <div className="container">
      <BackLink to={backLinkHref}>
        <p>Back to home</p>
      </BackLink>
      <Filter status={status} changeStatus={changeStatus} />
      <AppTweets users={usersList} />
      {showBtn && <LoadMore onBtnClick={onBtnClick} />}
    </div>
  );
};
