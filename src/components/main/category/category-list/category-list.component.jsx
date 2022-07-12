import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  categoryByColumnSelector, getAllCategories
} from '../../../../redux/features/category/category.slice';
import CategoryItem from '../category-list-item/category-list-item.component';
import LoaderContent from '../../../common/loader-content/loader-content.component';
import Page404 from '../../../common/page-404/page-404.component';
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

  if (categoryStatus === 'idle') {
    return (
      <div className={styles.container}>
        <div className={styles.oneColumn}>
          {new Array(3)
            .fill(null)
            .map(() => <LoaderContent />)}
        </div>
        <div className={styles.twoColumn}>
          {new Array(3)
            .fill(null)
            .map(() => <LoaderContent />)}
        </div>
        <div className={styles.threeColumn}>
          {new Array(3)
            .fill(null)
            .map(() => <LoaderContent />)}
        </div>
      </div>
    )
  }

  if (categoryStatus === 'failed') {
    return <Page404 />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.oneColumn}>
        {categoryByColumn.one.map(category => (
          <CategoryItem key={category.id} name={category.name} imageByte={category.imageByte} />
        ))}
      </div>
      <div className={styles.twoColumn}>
        {categoryByColumn.two.map(category => (
          <CategoryItem key={category.id} name={category.name} imageByte={category.imageByte} />
        ))}
      </div>
      <div className={styles.threeColumn}>
        {categoryByColumn.three.map(category => (
          <CategoryItem key={category.id} name={category.name} imageByte={category.imageByte} />
        ))}
      </div>
    </div>
  )
}

export default CategoryList;
