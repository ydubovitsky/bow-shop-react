import styles from './admin.module.css';
import ProductForm from '../../components/admin/product-form/product-form.component';

const Admin = () => {

  return (
    <div className={styles.container}>
      ADMIN
      <ProductForm />
    </div>
  )
}

export default Admin;