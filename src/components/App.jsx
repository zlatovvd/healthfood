import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Loader />} />
      </Routes>
    </ChakraProvider>
  );
};
