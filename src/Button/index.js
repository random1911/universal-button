import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  type,
  onClick,
  url,
  inputId,
  baseClass,
  modifier,
  text,
  title,
  disabled,
  icon,
  postIcon
}) => {
  // get BEM style modifiers
  const getCSSModifiers = modifier => {
    if (!modifier) return "";
    let modifiers;
    if (typeof modifier === "string") {
      modifiers = modifier.split(",");
    } else if (Array.isArray(modifier)) {
      modifiers = [...modifier];
    }
    if (!modifiers || !modifiers.length) return "";
    const result = modifiers.map(name => `${baseClass}_${name.trim()}`);
    return ` ${result.join(" ")}`;
  };

  const combinedClass = `${baseClass}${getCSSModifiers(modifier)}`;

  const renderIcon = name => {
    const iconClass = `${baseClass}__icon`;
    return <span className={`${iconClass} ${iconClass}_${name}`} />;
  };

  // template of inner content
  const inner = (
    <span className={`${baseClass}__inner`}>
      {icon && renderIcon(icon)}
      {text && <span className={`${baseClass}__text`}>{text}</span>}
      {text && postIcon && renderIcon(postIcon)}
    </span>
  );

  // render external tag based on type prop
  switch (type) {
    case "link":
      return (
        <a className={combinedClass} title={title} href={url}>
          {inner}
        </a>
      );
    case "label":
      return (
        <label className={combinedClass} title={title} htmlFor={inputId}>
          {inner}
        </label>
      );
    default: {
      return (
        <button
          type={type}
          className={combinedClass}
          title={title}
          disabled={disabled}
          onClick={onClick}
        >
          {inner}
        </button>
      );
    }
  }
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "label", "submit", "link"]),
  onClick: PropTypes.func,
  url: PropTypes.string,
  inputId: PropTypes.string,
  baseClass: PropTypes.string,
  modifier: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  text: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  postIcon: PropTypes.string
};

Button.defaultProps = {
  type: "button",
  baseClass: "button",
  onClick: () => {}
};

export default Button;
