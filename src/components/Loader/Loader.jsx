import AppSpinner from "components/AppSpinner/AppSpiner";
import Layout from "components/Layout/Layout";
import { useProducts } from "hooks/useProducts";
import MainPage from "pages/MainPage/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductThunk } from "redux/products/productsThunk";

const Loader = () => {

    const dispatch = useDispatch();
    const { isLoading, data } = useProducts();
    console.log(data);
    useEffect(() => {
        dispatch(getProductThunk());
    }, [dispatch])

    return (
      <>
        {isLoading && <AppSpinner /> }
      </>
    );

}

export default Loader;