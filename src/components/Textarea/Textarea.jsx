import React from "react";

export function Textarea({
  label,
  required,
  placeholder,
  onInput,
  disabled,
  style
}) {
  return (
    <div>
      {label}
      {required ? <span className="required">(required)</span> : null}
      <textarea
        disabled={disabled}
        onInput={onInput}
        placeholder={placeholder}
        style={style}
      />
    </div>
  );
}

export default Textarea;
