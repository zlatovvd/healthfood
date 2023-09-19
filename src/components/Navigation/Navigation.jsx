import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = ({ isMenu, handleMenuClick }) => {
  return (
    <ul className={`${css.navList} ${isMenu && css.isVisible}`}>
      <li className={css.navItem}>
        <NavLink to="/diary" className={css.navLink} onClick={handleMenuClick}>
          Diary
        </NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink
          to="/calculator"
          className={css.navLink}
          onClick={handleMenuClick}
        >
          Calculator
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
