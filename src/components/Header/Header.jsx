import AuthNav from 'components/AuthNav/AuthNav';
import css from './Header.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectIsOpen } from 'redux/modal/modalSelector';
import { open } from 'redux/modal/modalSlice';
import { useAuth } from 'hooks/useAuth';

const Header = () => {
  
  const {isLoggedIn} = useAuth();
  const isModalOpen = useSelector(selectIsOpen);

  const dispatch = useDispatch();
 
  const [isMenu, setIsMenu] = useState(false);

  const handleMenuClick = () => {
    setIsMenu(!isMenu);
  };

  const handleBackBtn = () => {
    dispatch(open(false));
  }

  return (
    <header className={css.header}>
      <Logo />
      {isLoggedIn ? (
        <div className={css.nawWrapper}>
          <Navigation isMenu={isMenu} handleMenuClick={handleMenuClick} />
          <div className={css.rightNavBlock}>
            <div className={css.userWrapper}>
              <div>
                {isModalOpen && <button className={css.backBtn} onClick={handleBackBtn}></button>}
              </div>
              <UserInfo />
            </div>
            <button
              className={`${!isMenu ? css.menuBtn : css.closeBtn}`}
              onClick={handleMenuClick}
            ></button>
          </div>
        </div>
      ) : (
        <>
          <AuthNav />
          {/* {isModalOpen && (
            <div className={css.navFooter}>
              <button className={css.backBtn}></button>
            </div>
          )} */}
        </>
      )}
    </header>
  );
};

export default Header;
