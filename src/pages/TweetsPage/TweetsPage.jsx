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

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getUsers('?page=1&limit=3').then(data => {
      setUsersList(data);
    });
  }, []);

  useEffect(() => {
    if (page > 1) {
      getUsers(`?page=${page}&limit=3`).then(data => {
        setUsersList(prevState => [...prevState, ...data]);
      });
    }
    if (page < 15 / 3) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [page]);

  const onBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  const changeStatus = evt => {
    const currentButton = evt.target.name;

    getUsers().then(data => {
      const following = data.filter(
        item => JSON.parse(window.localStorage.getItem(item.id)) === true
      );
      const follow = data.filter(
        item => JSON.parse(window.localStorage.getItem(item.id)) === false
      );

      const all = data;

      if (currentButton === 'following') {
        setUsersList(following);
      } else if (currentButton === 'follow') {
        setUsersList(follow);
      } else setUsersList(all);

      if (page < following.length / 3) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  };

  return (
    <div className="container">
      <BackLink to={backLinkHref}>
        <p>Back to home</p>
      </BackLink>
      <Filter changeStatus={changeStatus} />
      <AppTweets users={usersList} />
      {showBtn && <LoadMore onBtnClick={onBtnClick} />}
    </div>
  );
};
