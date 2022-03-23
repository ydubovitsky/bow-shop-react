import styles from './new-collection.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { productsByCreateDateSelector } from '../../../redux/features/product/product.slice';
import ProductListItem from '../shop/product-list-item/product-list-item.component';

const NewCollection = () => {

  const [productLimit, setProductLimit] = useState(10);
  const [columnCount, setColumnCount] = useState('1fr 1fr');
  const productsByCreateDate = useSelector(state => productsByCreateDateSelector(state, productLimit));

  const showProducts = () => {
    return productsByCreateDate.map(product => <ProductListItem product={product} />)
  }

  const setColumnCountHandler = (event) => {
    const count = parseInt(event.target.value);

    switch (count) {
      case 1: setColumnCount('1fr')
        break;
      case 2: setColumnCount('1fr 1fr')
        break;
      case 3: setColumnCount('1fr 1fr 1fr')
        break;
      case 4: setColumnCount('1fr 1fr 1fr 1fr')
        break;
      default: setColumnCount('1fr 1fr');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>New collection</div>
      <div className={styles.input}>
        <label for="column">Choose a column count: </label>
        <select name="column" onChange={setColumnCountHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className={styles.productsContainer} style={{ 'grid-template-columns': columnCount }}>
        {showProducts()}
      </div>
    </div>
  )
}

export default NewCollection;