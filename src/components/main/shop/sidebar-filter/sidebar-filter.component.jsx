import styles from './sidebar-filter.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoriesNameSelector,
  getAllCategories
} from '../../../../redux/features/category/category.slice';

const minPrice = 10;
const maxPrice = 10000;
const colors = ["red", "green", "blue", "yellow", "purple", "white", "black", "coral"];

const SidebarFilter = () => {

  const dispatch = useDispatch();
  const categoriesName = useSelector(categoriesNameSelector);
  const categoryStatus = useSelector(state => state.category.status);
  const [currentRangeValue, setCurrentRangeValue] = useState(minPrice);

  useEffect(() => {
    if (categoryStatus === 'idle') {
      dispatch(getAllCategories());
    }
  }, []);

  const rangeInputHandler = (e) => {
    setCurrentRangeValue(e.target.value);
  }

  const showColorElements = (colorArray) => {
    return colorArray.map(color => (
      <div className={cn(styles.color, styles[color])}></div>
    ))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Categories</div>
      <div className={styles.categories}>
        {categoriesName.map(name => {
          return (<NavLink
            // activeClassName={styles.active}
            key={name}
            to={`/shop/${name}`}
          >{name}
          </NavLink>)
        })}
      </div>
      <div className={styles.title}>Color</div>
      <div className={styles.colors}>
        {showColorElements(colors)}
      </div>
      <div className={styles.price}>
        <label className={styles.title} for="price">Price</label>
        <input type="range" name="price" min={minPrice} max={maxPrice} onChange={rangeInputHandler}>
        </input>
        <div className={styles.cost}>{minPrice}р - {currentRangeValue}р</div>
      </div>
    </div>
  )
}

export default SidebarFilter;