import { useSelector } from "react-redux"
import { selectIsLoading, selectNotRecommendedProducts, selectProducts } from "redux/products/productsSelector"

export const useProducts = () => {
    return {
        isLoading: useSelector(selectIsLoading),
        data: useSelector(selectProducts),
        notRecommended: useSelector(selectNotRecommendedProducts),
    }
} 