import { useParams } from "react-router-dom";
import styles from './product-list.module.css';

const ProductList = () => {

  let { name } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eligendi!</p>
      </div>
    </div>
  )
}

export default ProductList;
