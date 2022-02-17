import styles from './sidebar.module.css';
import Button from '../../common/button/button.component';
import Logo from '../../common/logo/logo.component';
import {
  Link
} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.navContainer}>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <div className={styles.buttonContainer}>
        <Button name="%Discount%" />
        <Button name="New this week" style={{ 'background-color': 'black' }} />
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cartLink}>
          <i className="fas fa-cart-arrow-down"></i>
          <Link to="/cart">Cart(0)</Link>
        </div>
        <div className={styles.cartLink}>
          <i className="fas fa-star"></i>
          <Link to="/favorite">Favorite</Link>
        </div>
        <div className={styles.cartLink}>
          <i className="fas fa-search"></i>
          <Link to="/search">Search</Link>
        </div>
      </div>
      <div className={styles.socialContainer}>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-vk"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  )
}

export default Sidebar;