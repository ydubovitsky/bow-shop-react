import styles from './search.module.css';
import Button from '../../common/button/button.component';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { findProductsByKeywordSelector } from '../../../redux/features/product/product.slice';
import ProductListItem from '../shop/product-list-item/product-list-item.component';

const Search = () => {

  const [keyWord, setKeyword] = useState("");
  const products = useSelector(state => findProductsByKeywordSelector(state, keyWord));

  const findProductsByKeywordHandler = (event) => {
    const { value } = event.target;
    setKeyword(value);
  }

  return <div className={styles.container}>
    <div className={styles.title}>Search</div>
    <div className={styles.searchForm}>
      <input type="text" placeholder='input some product name...' onChange={findProductsByKeywordHandler} />
      <Button name={"Search"} />
    </div>
    <div className={styles.title}>Result</div>
    <div className={styles.productItems}>
      {console.log(products)}
      {products.map(product => {
        return <ProductListItem key={product.id} product={product} />
      })}
    </div>
  </div>
}

export default Search;