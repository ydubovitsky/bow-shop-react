import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { popUpEntitySelector, showPopup } from '../../../redux/features/popup/popup.slice';
import styles from './popup.module.css';

const POPUP_LIVE_TIME = 5000;

const Popup = () => {

  const dispatch = useDispatch();
  const { message, isShow, style } = useSelector(popUpEntitySelector);

  //TODO Доделать верную логику появления/исчезновения!
  if (isShow === true) {
    setTimeout(() => {
      dispatch(showPopup({ isShow: false }));
    }, POPUP_LIVE_TIME);
  }

  if (isShow === false) {
    return null;
  }

  return (
    <div className={cn(styles.container)} style={style}>
      <h2>{message}</h2>
    </div>
  )
}

export default Popup;