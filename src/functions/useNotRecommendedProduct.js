import { useIntake } from "hooks/useIntake";
import { useProducts } from "hooks/useProducts";
import { useDispatch } from "react-redux";
import { getNotRecommendedProductsThunk } from "redux/products/productsThunk";

const useNotRecommendedProduct = () => {

    const {personInfo} = useIntake();

    const dispatch = useDispatch();

    const notRecommended = dispatch(getNotRecommendedProductsThunk(personInfo.typeblood));

    return {notRecommended};

    // const {personInfo} = useIntake();
    // const {data} = useProducts();
    // console.log('data', data);

    // if (personInfo) {
    //     const notRecommended = [];
    //     //console.log("SELECT", personInfo.intakePersonInfo);
    //     const {typeblood} = personInfo;
    //     //console.log("SELECT 2", typeblood, 'prod', products);
    //     data.map(item => {
         
    //       if (
    //         item.groupBloodNotAllowed[typeblood] === true &&
    //         !notRecommended.includes(item.categories[0])
    //       ) {
    //         notRecommended.push(item.categories[0]);
    //       }
    //     });
    
    //     return notRecommended;
    //   }
  
    //   return [];
}

export default useNotRecommendedProduct;