import { useDispatch } from 'react-redux';
import css from './UserInfo.module.css';
import { authLogoutThunk } from 'redux/auth/authThunk';
import { useAuth } from 'hooks/useAuth';

const UserInfo = () => {

  const { user }  = useAuth();
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authLogoutThunk());
  };

  return (
    <div className={css.userInfo}>
      <span className={css.userName}>{user.name}</span>
      <button className={css.exitBtn} type="button" onClick={handleClick}>
       Exit
      </button>
    </div>
  );
};

export default UserInfo;
