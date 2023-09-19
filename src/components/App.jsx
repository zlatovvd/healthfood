import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import { ChakraProvider } from "@chakra-ui/react";
import { PublicRoute, PrivateRoute } from './AuthRouts';
import { lazy } from "react";

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="" element={<PublicRoute />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>
      </Routes>
    </ChakraProvider>
  );
};
