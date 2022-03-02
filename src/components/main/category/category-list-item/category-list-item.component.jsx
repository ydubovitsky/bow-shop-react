import styles from './category-list-item.module.css';
import { Link } from 'react-router-dom';

const CategoryListItem = ({ imageByte, name }) => {

  const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  return (
    <Link
      to={`/shop/${name}`}
      className={styles.container}
      style={{
        backgroundImage: `url(data:image/png;base64,${imageByte})`,
        minHeight: randomInteger(200, 350) + 'px'
      }}>
      <div className={styles.hr}></div>
      <div className={styles.price}>Цена от {randomInteger(100, 200)} р</div>
      <div className={styles.name}>{name}</div>
    </Link>
  )
}

export default CategoryListItem;
