import { useParams } from "react-router-dom";
import styles from './product-list.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProducts,
  productEntitiesStatusSelector,
  productByCategorySelector
} from '../../../../redux/features/product/product.slice';
import { categoryDescriptionByNameSelector } from '../../../../redux/features/category/category.slice';
import ProductListItem from '../product-list-item/product-list-item.component';

const ProductList = () => {

  let { name } = useParams();
  const dispatch = useDispatch();
  const productEntitiesStatus = useSelector(productEntitiesStatusSelector);
  const productByCategory = useSelector((state) => productByCategorySelector(state, name));
  const categoryDescriptionByName = useSelector(state => categoryDescriptionByNameSelector(state, name));

  useEffect(() => {
    if (productEntitiesStatus === 'idle') {
      dispatch(getAllProducts());
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>{categoryDescriptionByName}</p>
      </div>
      <div className={styles.productList}>
        {productByCategory.map(product => <ProductListItem product={product} />)}
      </div>
    </div>
  )
}

export default ProductList;
