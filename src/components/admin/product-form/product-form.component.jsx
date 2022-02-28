import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveProduct,
  productStatusSelector
} from '../../../redux/features/product/product.slice';
import {
  categoriesNameSelector,
  getAllCategories
} from '../../../redux/features/category/category.slice';
import Loader from '../loader/loader.component';
import styles from './product-form.module.css';
import Button from '../../common/button/button.component';

const ProductForm = () => {

  const dispatch = useDispatch();
  const formEl = useRef(null);
  const categoriesName = useSelector(categoriesNameSelector);
  const categoryStatus = useSelector(state => state.category.status);
  const productStatus = useSelector(productStatusSelector);

  useEffect(() => {
    if (categoryStatus === 'idle') {
      dispatch(getAllCategories());
    }
  }, []);

  const productFormHandler = () => {
    const formData = new FormData(formEl.current);
    dispatch(saveProduct(formData));
  }

  const showLoader = () => {
    if (productStatus === 'loading')
      return <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Product</div>
      {showLoader()}
      <div className={styles.form}>
        <form ref={formEl}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Input a product name" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" placeholder="Input a price" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="color">Color</label>
            <input type="color" name="color" placeholder="Select a color" />
          </div>

          <div className={styles.inputContainer}>
            <label for="category">Choose a category</label>
            <input list="category" name="category" placeholder="Select a category" />

            <datalist id="category">
              {categoriesName.map(name => <option value={name} />)}
            </datalist>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="description">Description</label>
            <textarea name="description" placeholder="Input some description" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="count">Count</label>
            <input type="number" name="count" placeholder="Select a count" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="imageByte">Image</label>
            <input type="file" name="imageByte" />
          </div>
        </form>
        <div className={styles.buttonContainer}>
          <Button handler={{ onClick: productFormHandler }} name="Send" />
        </div>
      </div>
    </div>
  )
}

export default ProductForm;