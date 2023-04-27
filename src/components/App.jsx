import { AppTweets } from './AppTweets/AppTweets';
import { getUsers } from 'fetchAPI/fetchAPI';
import { useEffect, useState } from 'react';

export const App = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsersList(data);
      console.log(data);
    });
  }, []);

  return <AppTweets users={usersList} />;
};
