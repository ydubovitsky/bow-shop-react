import styles from './contacts.module.css';
import cn from 'classnames';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateContacts } from '../../../redux/features/user/user.slice';
import Button from '../../common/button/button.component';

const Contacts = () => {

  const dispatch = useDispatch();
  const formEl = useRef(null);

  const adminContactsFormHandler = () => {
    const formData = new FormData(formEl.current);
    dispatch(updateContacts(formData));
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Admin contacts information</div>
      <div className={styles.form}>
        <form ref={formEl}>
          <div className={styles.inputContainer}>
            <label htmlFor="telegram"><i className={cn("fab fa-telegram", styles.telegram)}></i></label>
            <input type="text" name="telegram" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="whatsapp"><i className={cn("fab fa-whatsapp", styles.whatsapp)}></i></label>
            <input type="text" name="whatsapp" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="viber"><i className={cn("fab fa-whatsapp", styles.viber)}></i></label>
            <input type="text" name="viber" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="instagram"><i className={cn("fab fa-instagram", styles.instagram)}></i></label>
            <input type="text" name="instagram" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="vk"><i className={cn("fab fa-vk", styles.vk)}></i></label>
            <input type="text" name="vk" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="facebook"><i className={cn("fab fa-facebook", styles.facebook)}></i></label>
            <input type="text" name="facebook" />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="twitter"><i className={cn("fab fa-twitter", styles.twitter)}></i></label>
            <input type="text" name="twitter" />
          </div>

        </form>
        <div className={styles.buttonContainer}>
          <Button handler={{ onClick: adminContactsFormHandler }} name="Save Contacts" />
        </div>
      </div>
    </div>
  )
}

export default Contacts;