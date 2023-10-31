import css from './DiaryAddProductForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diaryAddProductThunk } from 'redux/diary/diaryThunk';
import { selectIsOpen } from 'redux/modal/modalSelector';
import { open } from 'redux/modal/modalSlice';
import { setFilter } from 'redux/products/productsSlice';
import { getProductByNameThunk } from 'redux/products/productsThunk';
import { useProducts } from 'hooks/useProducts';
import { useDiary } from 'hooks/useDiary';

const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [isAutocompliteOpen, setIsAutocompliteOpen] = useState(true);

  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsOpen);

  const { diaryDate } = useDiary();

  const { isLoading, data, choiceProduct } = useProducts();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'product':
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
    setIsAutocompliteOpen(!isAutocompliteOpen);
  };

  const handlerClickInput = () => {
    setIsAutocompliteOpen(true);
  };

  const calculateCalories = () => {
    const { calories, weight } = choiceProduct;
    return Math.round((calories * grams) / weight);
  };

  const onSubmit = event => {
    event.preventDefault();
    resetForm();
    console.log('diary date save', diaryDate);
    dispatch(
      diaryAddProductThunk({
        name: product,
        weight: grams,
        callories: calculateCalories(),
        date: new Date(diaryDate),
      })
    );

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

      {isLoading && <b>Products id loading</b>}

      {product && isAutocompliteOpen && !isLoading ? (
        <ul className={css.autocomplete}>
          {data.map(item => (
            <li
              className={css.autocompleteItem}
              key={item._id}
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
