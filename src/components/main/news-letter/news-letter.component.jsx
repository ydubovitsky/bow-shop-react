import styles from './news-letter.module.css';

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.oneColumn}>
        <div className={styles.title}>
          Subscribe for a 25% Discount
        </div>
        <div className={styles.subTitle}>
          Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.
        </div>
      </div>
      <div className={styles.twoColumn}>
        <input type="email" name="email" className={styles.email} placeholder="Your E-mail" />
        <input type="submit" className={styles.submit} value="Subscribe"/>
      </div>
    </div>
  )
}

export default NewsLetter;