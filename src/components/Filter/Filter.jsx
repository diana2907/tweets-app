import css from 'components/Filter/Filter.module.css';
import { Button } from 'components/Button/Button';

export const Filter = ({ changeStatus, status }) => {
  return (
    <ul className={css.buttons_list}>
      <li className={css.item}>
        <Button
          selected={status === 'following'}
          name="following"
          onClick={changeStatus}
        >
          Following
        </Button>
      </li>
      <li className={css.item}>
        <Button
          selected={status === 'follow'}
          name="follow"
          onClick={changeStatus}
        >
          Follow
        </Button>
      </li>
      <li className={css.item}>
        <Button selected={status === 'all'} name="all" onClick={changeStatus}>
          All
        </Button>
      </li>
    </ul>
  );
};
