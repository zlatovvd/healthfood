import { useSelector } from "react-redux"
import { selectChoiceProduct, selectIsLoading, selectNotRecommendedProducts, selectProducts } from "redux/products/productsSelector"

export const useProducts = () => {
    return {
        isLoading: useSelector(selectIsLoading),
        data: useSelector(selectProducts),
        notRecommended: useSelector(selectNotRecommendedProducts),
        choiceProduct: useSelector(selectChoiceProduct)
    }
} 