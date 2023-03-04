const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.className} button`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
