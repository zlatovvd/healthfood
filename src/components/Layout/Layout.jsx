import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppSpinner from 'components/AppSpinner/AppSpiner';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<AppSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
