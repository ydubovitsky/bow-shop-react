import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  saveProduct
} from '../../../redux/features/product/product.slice';
import styles from './product-form.module.css';

const ProductForm = () => {

  const dispatch = useDispatch();
  const formEl = useRef(null);

  const productFormHandler = () => {
    const formData = new FormData(formEl.current);
    dispatch(saveProduct(formData));
  }

  return (
    <div className={styles.container}>
      <form ref={formEl}>
        <input type="text" name="name" />
        <input type="text" name="price" />
        <input type="color" name="color" />
        <input type="text" name="category" />
        <input type="text" name="description" />
        <input type="number" name="count" />
        <input type="file" name="imageByte"/>
      </form>
      <button onClick={productFormHandler}>Send</button>
    </div>
  )
}

export default ProductForm;