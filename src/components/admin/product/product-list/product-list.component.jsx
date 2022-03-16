import styles from './product-list.module.css';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  productEntitiesStatusSelector,
  getAllProducts,
  productEntitiesSelector,
  deleteProduct
} from '../../../../redux/features/product/product.slice';
import ProductListItem from '../../../main/shop/product-list-item/product-list-item.component';

const ProductList = () => {

  const dispatch = useDispatch();
  const productEntities = useSelector(productEntitiesSelector);
  const productEntitiesStatus = useSelector(productEntitiesStatusSelector);

  useEffect(() => {
    if (productEntitiesStatus === 'idle') {
      dispatch(getAllProducts());
    }
  }, [])

  return (
    <div className={styles.container}>
      {productEntities.products.map(product => (
        <div className={styles.productContainer}>
          <ProductListItem product={product} />
          <i
            className={cn("fas fa-trash", styles.delete)}
            onClick={() => dispatch(deleteProduct(product.id))}
          ></i>
        </div>
      ))}
    </div>
  )
}

export default ProductList;