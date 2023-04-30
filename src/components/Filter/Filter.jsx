import css from 'components/Filter/Filter.module.css';
import { Button } from 'components/Button/Button';

export const Filter = ({ changeStatus }) => {
  return (
    <ul className={css.buttons_list}>
      <li className={css.item}>
        <Button name="following" onClick={changeStatus}>
          Following
        </Button>
      </li>
      <li className={css.item}>
        <Button name="follow" onClick={changeStatus}>
          Follow
        </Button>
      </li>
      <li className={css.item}>
        <Button name="all" onClick={changeStatus}>
          All
        </Button>
      </li>
    </ul>
  );
};
