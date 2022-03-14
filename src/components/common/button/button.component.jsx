import styles from './button.module.css';
import cn from 'classnames';

const Button = ({ name, style, handler, isDisabled }) => {

  return (
    <button
      className={cn(styles.container, isDisabled === true ? styles.isDisabled : '')}
      style={{ ...style }}
      disabled={isDisabled}
      {...handler}
    >{name}
    </button>
  )
}

export default Button;