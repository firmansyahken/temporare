import style from "./Button.module.css";

function Button(props) {
  const { title } = props;

  return <button className={style.button}>{title}</button>;
}

export default Button;
