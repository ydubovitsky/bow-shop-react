import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {
  recommendationProductsSelector
} from '../../../redux/features/product/product.slice';

const RecommendedProducts = () => {

  const recommendationProducts = useSelector(recommendationProductsSelector);

  const showRecommendationProducts = () => {
    return recommendationProducts.map(recProduct => {
      return <Link
        key={recProduct.id}
        to={`/shop/${recProduct.category.name}/${recProduct.id}`}
        style={{
          backgroundImage: `url(data:image/png;base64,${recProduct.imageByte})`,
        }}>
      </Link>
    })
  }

  return showRecommendationProducts();
}

export default RecommendedProducts;