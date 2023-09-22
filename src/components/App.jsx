import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import { ChakraProvider } from '@chakra-ui/react';
import { PublicRoute, PrivateRoute } from './AuthRouts';
import NotFound from 'pages/NotFound/NotFound';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);

export const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/diary" element={<DiaryPage />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </ChakraProvider>
  );
};
