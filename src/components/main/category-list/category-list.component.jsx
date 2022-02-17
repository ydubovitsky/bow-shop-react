import styles from './category-list.module.css';
import ProductItem from '../category-item/category-item.component';
import item1 from '../../../images/category-item/item1.jpg';
import item2 from '../../../images/category-item/item2.jpg';
import item3 from '../../../images/category-item/item3.jpg';
import item4 from '../../../images/category-item/item4.jpg';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.oneColumn}>
        <ProductItem name="Basert Maquent" image={item1} price={200}/>
        <ProductItem name="Qunder Maset" image={item2} price={200}/>
        <ProductItem name="Merton Lomupart" image={item3} price={200}/>
      </div>
      <div className={styles.twoColumn}>
        <ProductItem name="Basert Maquent" image={item1} price={200}/>
        <ProductItem name="Qunder Maset" image={item2} price={200}/>
        <ProductItem name="Merton Lomupart" image={item3} price={200}/>
      </div>
      <div className={styles.threeColumn}>
        <ProductItem name="Zendex Calm" image={item1} price={200}/>
        <ProductItem name="Mertolis Sertob" image={item4} price={200}/>
        <ProductItem name="Indiat Lomal" image={item3} price={200}/>
      </div>
    </div>
  )
}

export default CategoryList;