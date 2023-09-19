import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthNav.module.css';

const StyledLink = styled(NavLink)`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.17;
    text-transform: uppercase;
    color: #9b9faa;
    text-decoration: none;

  &.active {
    color: #212121;
  }
`;

const AuthNav = () => {
  return (
      <ul className={css.authList}>
        <li className={css.authItem}>
          <StyledLink to="/login">Log in</StyledLink>
        </li>
        <li className={css.authItem}>
          <StyledLink to="/registration">Registration</StyledLink>
        </li>
      </ul>
  );
};

export default AuthNav;
