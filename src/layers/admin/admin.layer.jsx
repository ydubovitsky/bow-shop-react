import Header from '../../components/admin/header/header.component';
import Footer from '../../components/common/footer/footer.component';
import styles from './admin.module.css';
import { Outlet } from 'react-router-dom';

const Admin = () => {

  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Admin;