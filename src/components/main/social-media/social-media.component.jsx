import styles from './social-media.module.css';
import cn from 'classnames';

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://telegram.me/Suchermann"
      >
        <i className={cn("fab fa-telegram", styles.telegram)}></i>
      </a>
      <a
        href="https://telegram.me/Suchermann"
      >
        <i className={cn("fab fa-whatsapp", styles.whatsapp)}></i>
      </a>
      <a
        href="https://telegram.me/Suchermann"
      >
        <i className={cn("fab fa-whatsapp", styles.viber)}></i>
      </a>
      <a
        href="https://telegram.me/Suchermann"
      >
        <i className={cn("fab fa-instagram", styles.instagram)}></i>
      </a>
      <a
        href="https://telegram.me/Suchermann"
      >
        <i className={cn("fab fa-vk", styles.vk)}></i>
      </a>
      <a
        href="https://telegram.me/Suchermann"
      >
        <i className={cn("fab fa-twitter", styles.twitter)}></i>
      </a>
    </div>
  )
}

export default SocialMedia;