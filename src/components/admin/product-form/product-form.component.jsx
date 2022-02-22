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
      <div className={styles.form}>
        <form ref={formEl}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="color">Color</label>
            <input type="color" name="color" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="description">Description</label>
            <textarea name="description" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="count">Count</label>
            <input type="number" name="count" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="imageByte">Image</label>
            <input type="file" name="imageByte" />
          </div>
        </form>
        <button onClick={productFormHandler}>Send</button>
      </div>
    </div>
  )
}

export default ProductForm;