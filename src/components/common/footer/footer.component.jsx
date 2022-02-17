import styles from './footer.module.css';
import Logo from '../logo/logo.component';
import {
  Link
} from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.oneColumn}>
        <Logo style={{ 'color': 'white' }} />
      </div>
      <div className={styles.twoColumn}>
        <nav className={styles.navContainer}>
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/product">Product</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
      </div>
    </div>
  )
}

export default Footer;