import styles from './logo.module.css';
import logo from '../../../images/logo/logo-img.png';
import { Link } from 'react-router-dom';

const Logo = ({ style }) => {
  return (
    <div className={styles.container}
    >
      <Link to="/"
        style={{ ...style }}
      >
        <div className={styles.title}>
          <p>Migliori Archi <i className="fas fa-ribbon"></i></p>
        </div>
        <div className={styles.subTitle}>
          <p>beauty & style</p>
        </div>
      </Link>
    </div>
  )
}

export default Logo;