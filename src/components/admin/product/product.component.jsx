import styles from './product.module.css';
import ProductForm from './product-form/product-form.component';
import ProductList from './product-list/product-list.component';
import { useState } from 'react';

const Product = () => {

  const [selector, setSelector] = useState('add');

  const changeRadioProductHandler = (event) => {
    const { value } = event.target;
    setSelector(value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Product</div>
      <div className={styles.selector}>
        <p className={styles.selectorTitle}>Add/Edit product:</p>
        <div className={styles.inputContainer}>
          <div>
            <input type="radio" name="product" value="add" onClick={changeRadioProductHandler} />
            <label for="add">Add Product</label>
          </div>
          <div>
            <input type="radio" name="product" value="edit" onClick={changeRadioProductHandler} />
            <label for="edit">Edit Product</label>
          </div>
        </div>
      </div>
      {selector === 'add' ? <ProductForm /> : <ProductList />}
    </div>
  )
}

export default Product;