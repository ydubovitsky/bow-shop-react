import styles from './sidebar-filter.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const SidebarFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Categories</div>
      <div className={styles.categories}>
        <Link to={"/school"}>School</Link>
        <Link to={"/foamiran"}>Foamiran</Link>
        <Link to={"/hairpins"}>Hairpins</Link>
        <Link to={"/headbands"}>Headbands</Link>
        <Link to={"/kits"}>Kits</Link>
        <Link to={"/gift-baskets"}>Gift Baskets</Link>
      </div>
      <div className={styles.title}>Color</div>
      <div className={styles.colors}>
        <div className={cn(styles.color, styles.red)}></div>
        <div className={cn(styles.color, styles.green)}></div>
        <div className={cn(styles.color, styles.blue)}></div>
        <div className={cn(styles.color, styles.yellow)}></div>
        <div className={cn(styles.color, styles.purple)}></div>
        <div className={cn(styles.color, styles.white)}></div>
        <div className={cn(styles.color, styles.orange)}></div>
        <div className={cn(styles.color, styles.coral)}></div>
      </div>
      <div className={styles.title}>Price</div>
      <div className={styles.price}>
        <div className={styles.line}>
          <div className={styles.ballStart}></div>
          <div className={styles.ballEnd}></div>
        </div>
      </div>
    </div>
  )
}

export default SidebarFilter;