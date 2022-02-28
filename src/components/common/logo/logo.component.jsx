import styles from './logo.module.css';
import logo from '../../../images/logo/logo-img.png';
import { Link } from 'react-router-dom';

const Logo = ({ style }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}
        style={{ ...style }}
      ><Link to="/">Migliori Archi</Link>
      </h1>
      {/* <img src={logo} alt="" srcset="" /> */}
    </div>
  )
}

export default Logo;