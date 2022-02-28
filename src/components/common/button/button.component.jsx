import styles from './button.module.css';

const Button = ({ name, style, handler }) => {
  return (
    <button
      className={styles.container}
      style={{ ...style }}
      {...handler}
    >{name}
    </button>
  )
}

export default Button;