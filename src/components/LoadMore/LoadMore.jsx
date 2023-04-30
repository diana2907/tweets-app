import css from 'components/TweetItem/TweetItem.module.css';

export const LoadMore = ({ onBtnClick }) => {
  return (
    <button className={css.btn} onClick={onBtnClick} type="button">
      Load More
    </button>
  );
};
