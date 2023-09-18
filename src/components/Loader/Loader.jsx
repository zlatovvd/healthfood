import AppSpinner from "components/AppSpinner/AppSpiner";
import { useProducts } from "hooks/useProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductThunk } from "redux/products/productsThunk";

const Loader = () => {

    const dispatch = useDispatch();
    const { isLoading, data } = useProducts();

    useEffect(() => {
        dispatch(getProductThunk());
    }, [])

    return (
      <>
        {isLoading && (
          <AppSpinner />
        )}
        {data && <h2>Data is loaded</h2>}
      </>
    );

}

export default Loader;