import Footer from '../../components/common/footer/footer.component';
import Content from '../../components/main/content/content.component';
import NewsLetter from '../../components/main/news-letter/news-letter.component';
import Sidebar from '../../components/main/sidebar/sidebar.component';
import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.newsLetter}>
        <NewsLetter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Main;