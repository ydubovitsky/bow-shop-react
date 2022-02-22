import styles from './admin.module.css';
import ProductForm from '../../components/admin/product-form/product-form.component';
import Footer from '../../components/common/footer/footer.component';
import Header from '../../components/admin/header/header.component';

const Admin = () => {

  return (
    <div className={styles.container}>
      <Header />
      <ProductForm />
      <Footer />
    </div>
  )
}

export default Admin;