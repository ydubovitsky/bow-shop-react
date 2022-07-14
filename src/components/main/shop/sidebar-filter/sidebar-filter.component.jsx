import styles from './sidebar-filter.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoriesNameSelector,
  getAllCategories
} from '../../../../redux/features/category/category.slice';

const colors = ["red", "green", "blue", "yellow", "purple", "white", "black", "coral"];

const SidebarFilter = ({
  minProductPrice,
  maxProductPrice,
  maxProductPriceFilterValue,
  setMaxProductPriceFilterValue
}) => {

  const dispatch = useDispatch();
  const categoriesName = useSelector(categoriesNameSelector);
  const categoryStatus = useSelector(state => state.category.status);

  useEffect(() => {
    if (categoryStatus === 'idle') {
      dispatch(getAllCategories());
    }
  }, []);

  const rangeInputHandler = (e) => {
    setMaxProductPriceFilterValue(e.target.value);
  }

  const showColorElements = (colorArray) => {
    return colorArray.map(color => (
      <div
        className={cn(styles.color, styles[color])}
        //TODO Добавить фильтрацию по цвету!
        onClick={() => dispatch({ type: 'filterProductsByColor' })}>
      </div>
    ))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Categories</div>
      <div className={styles.categories}>
        {categoriesName.map(name => {
          return (<NavLink
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
        <input type="range" name="price" min={minProductPrice} max={maxProductPrice} onChange={rangeInputHandler}>
        </input>
        <div className={styles.cost}>{minProductPrice}р - {maxProductPriceFilterValue}р</div>
      </div>
    </div>
  )
}

export default SidebarFilter;