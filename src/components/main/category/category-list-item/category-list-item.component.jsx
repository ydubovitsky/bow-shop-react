import styles from './category-list-item.module.css';
import { Link } from 'react-router-dom';

const CategoryListItem = ({ image, name, price }) => {
  return (
    <Link
      to={`/shop/${name}`}
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price} р.</div>
    </Link>
  )
}

export default CategoryListItem;
