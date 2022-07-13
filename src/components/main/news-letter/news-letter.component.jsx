import { useDispatch } from 'react-redux';
import { showPopup } from '../../../redux/features/popup/popup.slice';
import styles from './news-letter.module.css';

const POPUP_PROPERTIES = {
  isShow: true,
  message: 'Sorry, this feature is temporarily unavailable',
  style: {
    "background-image": "linear-gradient(to left top, #F8B510 70%, #4F8A8B)"
  }
}

const NewsLetter = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.oneColumn}>
        <div className={styles.title}>
          Subscribe for a <span className={styles.discount}>25% Discount</span>
        </div>
        <div className={styles.subTitle}>
          Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.
        </div>
      </div>
      <div className={styles.twoColumn}>
        <input type="email" name="email" className={styles.email} placeholder="Your E-mail" />
        <input
          type="submit"
          className={styles.submit}
          value="Subscribe"
          onClick={() => dispatch(showPopup(POPUP_PROPERTIES))}
        />
      </div>
    </div>
  )
}

export default NewsLetter;