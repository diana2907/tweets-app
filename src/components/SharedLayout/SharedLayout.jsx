import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/SharedLayout/SharedLayout.module.css';
import { Suspense } from 'react';

const SharedLayout = () => {
  let activeStyle = {
    backgroundColor: '#ebd8ff',
    color: 'black',
  };

  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            to="/"
            end="true"
            className={css.nav_link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className={css.nav_link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/tweets"
          >
            Tweets
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
