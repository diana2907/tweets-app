// import css from 'components/AppTweets/AppTweets.module.css';
import { TweetItem } from 'components/TweetItem/TweetItem';

export const AppTweets = ({ users }) => {
  return (
    <div className="container">
      <ul>
        {users.map(user => (
          <TweetItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
