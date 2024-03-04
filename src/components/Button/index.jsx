import clsx from "clsx";

export const Button = ({
  className,
  children,
  type,
  id,
  value,
  variant,
  isDisable,
  handleChange,
  name,
  ...rest
}) => {
  return (
    <button
      className={clsx("btn", className, {
        ["btn-primary"]: variant == "primary",
        ["btn-secondary"]: variant == "secondary",
        ["btn-third"]: variant == "third",
      })}
      type={type}
      id={id}
      name={name}
      disabled={isDisable}
      onClick={handleChange}
      value={value}
      {...rest}
    >
      {children}
    </button>
  );
};
