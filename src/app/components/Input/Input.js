import React from "react";
import { Container } from "./styles";

export const Input = (props) => {
  const {
    type,
    icon,
    placeholder,
    id,
    onChange,
    onKeyPress,
    value,
    maxValue,
    className,
  } = props;
  return (
    <Container className={className}>
      {icon}
      <input
        max={maxValue}
        maxLength={maxValue}
        type={type}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        id={id}
      />
    </Container>
  );
};
export const Textarea = (props) => {
  const { rows, placeholder, onChange, value } = props;
  return (
    <Container>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    </Container>
  );
};
export const File = (props) => {
  const { id, placeholder, icon, accept, onChange } = props;
  return (
    <>
      <label htmlFor={id}>
        <Container>
          <span>{icon}</span>
          <span>{placeholder}</span>
        </Container>
      </label>
      <input
        type="file"
        id={id}
        onChange={(e) => {
          onChange(e);
        }}
        style={{ display: "none" }}
        accept={accept + "/*"}
        onClick={(e) => (e.target.value = null)}
      />
    </>
  );
};
