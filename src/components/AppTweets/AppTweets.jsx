// import css from 'components/AppTweets/AppTweets.module.css';
import { TweetItem } from 'components/TweetItem/TweetItem';
import css from 'components/AppTweets/AppTweets.module.css';

export const AppTweets = ({ users }) => {
  return (
    <ul className={css.list}>
      {users.map(user => (
        <TweetItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
