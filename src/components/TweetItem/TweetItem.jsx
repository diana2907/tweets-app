import css from 'components/TweetItem/TweetItem.module.css';
import img1 from '../../images/logo.svg';
import img2 from '../../images/backgraundImage.png';
import { setFollower } from 'fetchAPI/fetchAPI';
import { useEffect, useState } from 'react';

export const TweetItem = ({ user }) => {
  const [isFollow, setIsFollow] = useState(() => {
    const isFollowBoolean = window.localStorage.getItem(user.id);
    if (isFollowBoolean !== null) {
      return JSON.parse(isFollowBoolean);
    }
    return false;
  });
  const [numberFollowers, setNumberFollowers] = useState(user.followers);

  useEffect(() => {
    window.localStorage.setItem(user.id, JSON.stringify(isFollow));
  }, [isFollow, user.id]);

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const addFollow = () => {
    setFollower(user.id, user.followers + 1);
    setNumberFollowers(numberFollowers + 1);
    setIsFollow(true);
    window.localStorage.setItem(user.id, JSON.stringify(true));
  };

  const removeFollow = () => {
    setFollower(user.id, user.followers - 1);
    setNumberFollowers(numberFollowers - 1);
    window.localStorage.setItem(user.id, JSON.stringify(false));
    setIsFollow(false);
  };

  return (
    <li className={css.item}>
      <div className={css.row}>
        <div className={css.avatar_box}>
          <img className={css.avatar_img} src={user.avatar} alt="" />
        </div>
      </div>
      <div className={css.wrap}>
        <img className={css.logo_icon} src={img1} alt="Logo" />
        <img className={css.img} src={img2} alt="Logo" />

        <div className={css.info}>
          <p className={css.info_tweet}>{formatNumber(user.tweets)} tweets</p>
          <p>{formatNumber(numberFollowers)} Followers</p>

          {!isFollow ? (
            <button onClick={addFollow} className={css.btn} type="button">
              Follow
            </button>
          ) : (
            <button
              onClick={removeFollow}
              className={css.btn__dark}
              type="button"
            >
              Following
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
