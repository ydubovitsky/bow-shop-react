import styles from './sign-in.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/features/auth/auth.slice';
import { useState } from 'react';
import Button from '../../common/button/button.component';

const SignIn = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Sign In</p>
      </div>
      <div className={styles.loginForm}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={inputHandler} />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" onChange={inputHandler} />
        <Button name={"Login"} handler={{ onClick: () => dispatch(login(formData)) }} />
      </div>
    </div>
  )
}

export default SignIn;