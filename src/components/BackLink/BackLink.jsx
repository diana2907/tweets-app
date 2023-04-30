import { Link } from 'react-router-dom';
import css from 'components/BackLink/BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={css.btn} to={to}>
      {children}
    </Link>
  );
};
