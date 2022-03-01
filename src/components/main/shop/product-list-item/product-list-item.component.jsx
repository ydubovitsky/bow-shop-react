import styles from './product-list-item.module.css';
import { Link } from 'react-router-dom';

const ProductListItem = ({ product }) => {

  console.log(product);

  //TODO Добавить настоящие рейтинг к продукту
  const showRating = () => {
    return new Array(5).fill(null).map(idx => <i className="fas fa-star"></i>)
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
        <p>{product.price} р.</p>
        <div className={styles.rating}>
          {showRating()}
        </div>
      </div>
      <div className={styles.name}>
        <p>{product.name}</p>
        <i className="fas fa-cart-arrow-down"></i>
      </div>
    </div>
  )
}

export default ProductListItem;