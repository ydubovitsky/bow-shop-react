import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  categoryByColumnSelector, getAllCategories
} from '../../../../redux/features/category/category.slice';
import CategoryItem from '../category-list-item/category-list-item.component';
import styles from './category-list.module.css';

const CategoryList = () => {

  const dispatch = useDispatch();
  const categoryByColumn = useSelector(categoryByColumnSelector);
  const categoryStatus = useSelector(state => state.category.status);

  useEffect(() => {
    if (categoryStatus === 'idle') {
      dispatch(getAllCategories());
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.oneColumn}>
        {categoryByColumn.one.map(category => (
          <CategoryItem name={category.name} imageByte={category.imageByte} />
        ))}
      </div>
      <div className={styles.twoColumn}>
        {categoryByColumn.two.map(category => (
          <CategoryItem name={category.name} imageByte={category.imageByte} />
        ))}
      </div>
      <div className={styles.threeColumn}>
        {categoryByColumn.three.map(category => (
          <CategoryItem name={category.name} imageByte={category.imageByte} />
        ))}
      </div>
    </div>
  )
}

export default CategoryList;
