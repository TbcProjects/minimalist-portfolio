"use client";

import { Formik, Form as FormField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { css } from "styled-system/css";
import { vstack } from "styled-system/patterns";
import { button } from "@lib/theme/components/button";
import { input } from "@lib/theme/components/input";

export default function Form() {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        // message: Yup.number().min(8).required("A phone number is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <FormField
            className={vstack({
              alignItems: "flex-start",
              w: { lg: "57%" },
            })}
          >
            <label
              className={css({
                textStyle: "inputLabel",
              })}
              htmlFor="name"
            >
              Name
            </label>
            <Field
              className={input()}
              name="name"
              type="text"
              placeholder="John Smith"
              autoComplete="on"
            />
            <ErrorMessage name="name" />

            <label
              className={css({
                textStyle: "inputLabel",
              })}
              htmlFor="email"
            >
              Email Address
            </label>
            <Field
              className={input()}
              name="email"
              type="email"
              placeholder="John Smith"
            />
            <ErrorMessage name="name" />

            <label
              className={css({
                textStyle: "inputLabel",
              })}
              htmlFor="message"
            >
              Message
            </label>
            <Field
              className={input()}
              as="textarea"
              name="message"
              placeholder="How can I help you?"
            />
            <ErrorMessage name="mess" />

            <button
              className={`${button({
                variant: "primary",
              })} ${css({ mt: "24px" })}`}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </FormField>
        );
      }}
    </Formik>
  );
}
