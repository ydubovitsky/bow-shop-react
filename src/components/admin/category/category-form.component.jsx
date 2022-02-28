import styles from './category-form.module.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  saveCategory
} from '../../../redux/features/category/category.slice';
import Button from '../../common/button/button.component';

const CategoryForm = () => {

  const dispatch = useDispatch();
  const formEl = useRef(null);

  const productFormHandler = () => {
    const formData = new FormData(formEl.current);
    dispatch(saveCategory(formData));
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Category</div>
      <div className={styles.form}>
        <form ref={formEl}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="description">Description</label>
            <textarea name="description" />
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

export default CategoryForm;