
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { firstCategoryElementNameSelector } from '../../../redux/features/category/category.slice';
import Loader from '../../admin/loader/loader.component';
import ProductList from "./product-list/product-list.component";
import styles from './shop.module.css';
import SidebarFilter from './sidebar-filter/sidebar-filter.component';

const minProductPrice = 10;
const maxProductPrice = 10000;

const Shop = () => {

  const navigate = useNavigate();
  const [maxProductPriceFilterValue, setMaxProductPriceFilterValue] = useState(maxProductPrice);
  const firstCategoryElementName = useSelector(firstCategoryElementNameSelector);

  //TODO Подумать как переделать это
  useEffect(() => {
    if (firstCategoryElementName === undefined) {
      return <Loader />
    }
    navigate(`/shop/${firstCategoryElementName}`);
  }, [firstCategoryElementName])

  return (
    <div className={styles.container}>
      <div className={styles.sidebarFilter}>
        <SidebarFilter
          minProductPrice={minProductPrice}
          maxProductPrice={maxProductPrice} 
          maxProductPriceFilterValue={maxProductPriceFilterValue}
          setMaxProductPriceFilterValue={setMaxProductPriceFilterValue}
          />
      </div>
      <div className={styles.content}>
        <ProductList maxProductPriceFilterValue={maxProductPriceFilterValue}/>
      </div>
    </div>
  )
}

export default Shop;
