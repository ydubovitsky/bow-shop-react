import styles from './category-item.module.css';

const CategoryItem = ({ image, name, price }) => {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price} р.</div>
    </div>
  )
}

export default CategoryItem;