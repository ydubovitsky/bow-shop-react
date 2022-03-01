import styles from './product-detail.module.css';
import { useSelector } from 'react-redux';
import {
  productByIdSelector,
  recommendationProductsSelector
} from '../../../redux/features/product/product.slice';
import { useParams, Link } from "react-router-dom";
import Button from '../../common/button/button.component';

const ProductDetail = () => {

  let { id } = useParams();
  const productById = useSelector(state => productByIdSelector(state, parseInt(id, 10)));
  const recommendationProducts = useSelector(recommendationProductsSelector);
  console.log(productById);

  //TODO Добавить настоящие рейтинг к продукту
  const showRating = () => {
    return new Array(5).fill(null).map(idx => <i className="fas fa-star"></i>)
  }

  //TODO Переработать метод с рекомендациями!
  const showRecommendationProducts = () => {
    return recommendationProducts.map(recProduct => {
      return <Link
        to={`/shop/${recProduct.category.name}/${recProduct.id}`}
        style={{
          backgroundImage: `url(data:image/png;base64,${recProduct.imageByte})`,
        }}>
      </Link>
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.category}>{productById.category.name} {'>'} {productById.name}</div>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(data:image/png;base64,${productById.imageByte})`,
        }}>
      </div>
      <div className={styles.info}>
        <div className={styles.hr}></div>
        <div className={styles.price}>
          <p>{productById.price} р.</p>
        </div>
        <div className={styles.rating}>
          {showRating()}
        </div>
        <div className={styles.name}>
          <p>{productById.name}</p>
          <i className="fas fa-cart-arrow-down"></i>
        </div>
        <div className={styles.description}>
          <p>{productById.description}</p>
        </div>
        <div className={styles.count}>
          <label htmlFor="count">Count:</label>
          <input type="number" name="count" id="" />
        </div>
        <Button name="Add to cart" />
      </div>
      <div className={styles.recommendation}>
        {showRecommendationProducts()}
      </div>
    </div>
  )
}

export default ProductDetail;