import { Outlet } from 'react-router-dom';
import styles from './content.module.css';

const Content = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}

export default Content;