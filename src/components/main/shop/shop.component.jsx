
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { firstCategoryElementNameSelector } from '../../../redux/features/category/category.slice';
import Loader from '../../admin/loader/loader.component';
import ProductList from "./product-list/product-list.component";
import styles from './shop.module.css';
import SidebarFilter from './sidebar-filter/sidebar-filter.component';

const Shop = () => {

  const navigate = useNavigate();
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
        <SidebarFilter />
      </div>
      <div className={styles.content}>
        <ProductList />
      </div>
    </div>
  )
}

export default Shop;
