import AppSpinner from "components/AppSpinner/AppSpiner";
import { useProducts } from "hooks/useProducts";
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