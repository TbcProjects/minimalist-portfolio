import { Field, ErrorMessage, useField } from "formik";

import { input } from "@lib/theme/components/input";
import { css } from "styled-system/css";

interface InputProps {
  as?: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
}

export default function Input({ label, as, ...props }: InputProps) {
  const [field, meta] = useField(props);

  const { type, name, placeholder } = props;

  const touched = meta.error && meta.touched;

  const errorMessage = ({ children }: any) => {
    console.log({ children });
    return (
      <span
        className={css({
          color: "red",
        })}
      >
        {children}
      </span>
    );
  };

  return (
    <>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          textStyle: "inputLabel",
        })}
      >
        <label
          className={css({
            marginRight: "10px",
          })}
          htmlFor={name}
        >
          {label}
        </label>
        <ErrorMessage name={name} component={errorMessage} />
      </div>
      <Field
        as={as}
        className={input({ variant: touched ? "error" : "valid" })}
        type={type}
        placeholder={placeholder}
        autoComplete="on"
        {...field}
      />
    </>
  );
}
