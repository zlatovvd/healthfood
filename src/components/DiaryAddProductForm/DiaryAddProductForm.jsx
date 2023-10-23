import css from './DiaryAddProductForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryDate } from 'redux/diary/diarySelector';
import { diaryAddProductThunk } from 'redux/diary/diaryThunk';
import { selectIsOpen } from 'redux/modal/modalSelector';
import { open } from 'redux/modal/modalSlice';
import { setFilter } from 'redux/products/productsSlice';
import {
  selectFilteredProducts,
  selectFoundProduct,
  selectProducts,
} from 'redux/products/productsSelector';
import { getProductByNameThunk } from 'redux/products/productsThunk';
import { useProducts } from 'hooks/useProducts';

const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const foundProduct = useSelector(selectFoundProduct);
  const diaryDate = useSelector(selectDiaryDate);
  const isModalOpen = useSelector(selectIsOpen);

  const {isLoading, data} = useProducts();

  const handleChange = event => {
    const { name, value } = event.target;
    console.log('name', value);
    switch (name) {
      case 'product':
        //dispatch(setFilter(value));
        dispatch(getProductByNameThunk(value));
        setProduct(value);
        break;
      case 'grams':
        setGrams(value);
        break;
      default:
    }
    
  };

  const handlerClickItem = event => {
    dispatch(setFilter(event.target.textContent));
    setProduct(event.target.textContent);
    setIsOpen(!isOpen);
  };

  const handlerClickInput = () => {
    setIsOpen(true);
  };

  const onSubmit = event => {
    event.preventDefault();
    resetForm();
    
    const { calories,  weight } = foundProduct;

    const calculateCalories = Math.round((calories*grams)/weight);

    dispatch(diaryAddProductThunk({ name: product, weight: grams, callories: calculateCalories, date: diaryDate }));
    if (isModalOpen) {
      dispatch(open(false));
    }
  };

  const resetForm = () => {
    setProduct('');
    setGrams('');
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label className={css.inputLabel}>
        Enter product name
        <input
          className={`${css.input} ${css.productInput}`}
          name="product"
          value={product}
          onChange={handleChange}
          onClick={handlerClickInput}
          // pattern="^[a-zA-z]*"
          autoComplete="off"
          required
        />
      </label>

      {product && isOpen &&!isLoading ? (
        <ul className={css.autocomplete}>
          {data.map(item => (
            <li
              className={css.autocompleteItem}
              key={item._id.$oid}
              onClick={handlerClickItem}
            >
              {item.title.ua}
            </li>
          ))}
        </ul>
      ) : null}

      <label className={css.inputLabel}>
        Grams
        <input
          className={`${css.input} ${css.gramsInput}`}
          name="grams"
          value={grams}
          onChange={handleChange}
          pattern="^[0-9]*"
          required
        />
      </label>

      <button className={css.addButton} type="submit">
        <span className={css.srOnly}>Add</span>
      </button>
    </form>
  );
};

export default DiaryAddProductForm;
