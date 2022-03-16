import styles from './product-list-item.module.css';
import { Link } from 'react-router-dom';
import CartIcon from '../../../common/cart-icon/cart-icon.component';

const ProductListItem = ({ product }) => {

  //TODO Добавить настоящие рейтинг к продукту
  const showRating = () => {
    return new Array(5).fill(null).map((val, idx) => <i key={idx} className="fas fa-star"></i>)
  }

  return (
    <div className={styles.container}>
      <Link
        to={`/shop/${product.category.name}/${product.id}`}
        className={styles.container}
        style={{
          backgroundImage: `url(data:image/png;base64,${product.imageByte})`,
        }}>
      </Link>
      <div className={styles.hr}></div>
      <div className={styles.price}>
        <span>{product.price} р.</span>
        <div className={styles.rating}>
          {showRating()}
        </div>
      </div>
      <div className={styles.name}>
        <span>{product.name}</span>
        <CartIcon product={product} count={1} />
      </div>
    </div>
  )
}

export default ProductListItem;