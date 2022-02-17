import styles from './button.module.css';

const Button = ({ name, style }) => {
  return (
    <button className={styles.container} style={{...style}}>{name}</button>
  )
}

export default Button;