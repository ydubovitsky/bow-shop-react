import styles from './logo.module.css';
import logo from '../../../images/logo/logo-img.png';

const Logo = ({ style }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ ...style }}>Migliori Archi</h1>
      {/* <img src={logo} alt="" srcset="" /> */}
    </div>
  )
}

export default Logo;