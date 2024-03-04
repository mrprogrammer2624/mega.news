import clsx from "clsx";
import React from "react";

export const TextArea = ({
  parentClassName,
  label,
  className,
  labelClass,
  placeholder,
  handleChange,
  disabled,
  id,
  value,
  cols,
  rows,
  name,
  isRequired,
  ...rest
}) => {
  return (
    <div className={parentClassName}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(labelClass, "h5 block font-medium capitalize mb-4")}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={clsx(
          className,
          "form-input resize-none placeholder:capitalize placeholder:text-black-75"
        )}
        value={value}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        disabled={disabled}
        onChange={handleChange}
        required={isRequired}
        {...rest}
      />
    </div>
  );
};
