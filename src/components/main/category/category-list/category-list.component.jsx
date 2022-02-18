import styles from './category-list.module.css';
import CategoryItem from '../category-list-item/category-list-item.component';
import item1 from '../../../../images/category-item/item1.jpg';
import item2 from '../../../../images/category-item/item2.jpg';
import item3 from '../../../../images/category-item/item3.jpg';
import item4 from '../../../../images/category-item/item4.jpg';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.oneColumn}>
        <CategoryItem name="Basert Maquent" image={item1} price={200} />
        <CategoryItem name="Qunder Maset" image={item2} price={200} />
        <CategoryItem name="Merton Lomupart" image={item3} price={200} />
      </div>
      <div className={styles.twoColumn}>
        <CategoryItem name="Basert Maquent" image={item1} price={200} />
        <CategoryItem name="Qunder Maset" image={item2} price={200} />
        <CategoryItem name="Merton Lomupart" image={item3} price={200} />
      </div>
      <div className={styles.threeColumn}>
        <CategoryItem name="Zendex Calm" image={item1} price={200} />
        <CategoryItem name="Mertolis Sertob" image={item4} price={200} />
        <CategoryItem name="Indiat Lomal" image={item3} price={200} />
      </div>
    </div>
  )
}

export default CategoryList;
