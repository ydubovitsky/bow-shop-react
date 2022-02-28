import styles from './category-list-item.module.css';
import { Link } from 'react-router-dom';

const CategoryListItem = ({ imageByte, name, price }) => {
  return (
    <Link
      to={`/shop/${name}`}
      className={styles.container}
      style={{ backgroundImage: `url(data:image/png;base64,${imageByte})`}}>
      <div className={styles.name}>{name}</div>
    </Link>
  )
}

export default CategoryListItem;
