import css from 'components/TweetItem/TweetItem.module.css';
import img1 from '../../images/logo.svg';
import img2 from '../../images/backgraundImage.png';

export const TweetItem = ({ user }) => {
  return (
    <li className={css.item}>
      <div className={css.row}></div>
      <div className={css.wrap}>
        <img className={css.logo_icon} src={img1} alt="Logo" />
        <img className={css.img} src={img2} alt="Logo" />
        <p>{user.tweets} tweets</p>
        <p>{user.followers} Followers</p>
        <button className={css.btn} type="button">
          Follow
        </button>
      </div>
    </li>
  );
};
