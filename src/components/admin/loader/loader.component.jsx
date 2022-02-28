import styles from './loader.module.css';
import { useRef } from 'react';
import loader from '../../../images/loader/loader.svg';

const Loader = () => {

  const loaderRef = useRef(null);

  return (
    <div ref={loaderRef} className={styles.container}>
      <img src={loader} alt="SVG as an image" />
    </div>
  )
}

export default Loader;