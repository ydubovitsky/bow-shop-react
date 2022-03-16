import styles from './page-404.module.css';

const Page404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.firstFour}>4</h1>
      <div className={styles.cogWheel1}>
        <div className={styles.cog1}>
          <div className={styles.top}></div>
          <div className={styles.down}></div>
          <div className={styles.leftTop}></div>
          <div className={styles.leftDown}></div>
          <div className={styles.rightTop}></div>
          <div className={styles.rightDown}></div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </div>

      <div className={styles.cogWheel2}>
        <div className={styles.cog2}>
          <div className={styles.top}></div>
          <div className={styles.down}></div>
          <div className={styles.leftTop}></div>
          <div className={styles.leftDown}></div>
          <div className={styles.rightTop}></div>
          <div className={styles.rightDown}></div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </div>
      <h1 className={styles.secondFour}>4</h1>
      <p className={styles.wrongPara}>Uh Oh! Page not found!</p>
    </div>
  )
}

export default Page404;