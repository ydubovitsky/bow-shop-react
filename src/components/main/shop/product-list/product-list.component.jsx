import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProducts, productByCategorySelector,
  productEntitiesStatusSelector
} from '../../../../redux/features/product/product.slice';
import { categoryInfoSelector } from '../../../../redux/features/category/category.slice';
import ProductListItem from '../product-list-item/product-list-item.component';
import styles from './product-list.module.css';

const ProductList = () => {

  let { name } = useParams();
  const dispatch = useDispatch();
  const productByCategory = useSelector(state => productByCategorySelector(state, name));
  const productEntitiesStatus = useSelector(productEntitiesStatusSelector);
  const categoryInfo = useSelector(state => categoryInfoSelector(state, name));

  useEffect(() => {
    if (productEntitiesStatus === 'idle') {
      dispatch(getAllProducts())
    }
  }, [])

  return (
    <div className={styles.container}>
    {console.log(categoryInfo)}
      <div className={styles.info}>
        <h1>{categoryInfo.name}</h1>
        <p>{categoryInfo.description}</p>
      </div>
      <div className={styles.productList}>
        {productByCategory.map(product => <ProductListItem product={product} />)}
      </div>
    </div>
  )
}

export default ProductList;
