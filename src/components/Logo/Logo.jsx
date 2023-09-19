import css from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
    </Link>
  );
};

export default Logo;