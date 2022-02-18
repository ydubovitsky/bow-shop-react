import styles from './shop.module.css';
import SidebarFilter from './sidebar-filter/sidebar-filter.component';
import ProductList from './product-list/product-list.component';

const Shop = () => {
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
