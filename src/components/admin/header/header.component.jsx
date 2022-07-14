import styles from './header.module.css';
import Logo from '../../common/logo/logo.component';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo style={{ color: 'white' }} />
      <div className={styles.nav}>
        <NavLink to={"/admin/product"}>Product</NavLink>
        <NavLink to={"/admin/category"}>Category</NavLink>
        <NavLink to={"/admin/order"}>Orders</NavLink>
        <NavLink to={"/admin/contacts"}>Admin Contact Info</NavLink>
      </div>
    </div>
  )
}

export default Header;