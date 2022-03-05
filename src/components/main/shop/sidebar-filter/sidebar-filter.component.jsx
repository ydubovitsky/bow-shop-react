import styles from './sidebar-filter.module.css';
import cn from 'classnames';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoriesNameSelector,
  getAllCategories
} from '../../../../redux/features/category/category.slice';

const SidebarFilter = () => {

  const dispatch = useDispatch();
  const categoriesName = useSelector(categoriesNameSelector);
  const categoryStatus = useSelector(state => state.category.status);

  useEffect(() => {
    if (categoryStatus === 'idle') {
      dispatch(getAllCategories());
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Categories</div>
      <div className={styles.categories}>
        {categoriesName.map(name => {
          return (<NavLink
            // activeClassName={styles.active}
            to={`/shop/${name}`}
          >{name}
          </NavLink>)
        })}
      </div>
      <div className={styles.title}>Color</div>
      <div className={styles.colors}>
        <div className={cn(styles.color, styles.red)}></div>
        <div className={cn(styles.color, styles.green)}></div>
        <div className={cn(styles.color, styles.blue)}></div>
        <div className={cn(styles.color, styles.yellow)}></div>
        <div className={cn(styles.color, styles.purple)}></div>
        <div className={cn(styles.color, styles.white)}></div>
        <div className={cn(styles.color, styles.black)}></div>
        <div className={cn(styles.color, styles.coral)}></div>
      </div>
      <div className={styles.price}>
        <div className={styles.title}>
          <span>Price</span>
        </div>
        <div className={styles.line}>
          <div className={styles.ballStart}></div>
          <div className={styles.ballEnd}></div>
        </div>
        <div className={styles.cost}>100р - 1000р</div>
      </div>
    </div>
  )
}

export default SidebarFilter;