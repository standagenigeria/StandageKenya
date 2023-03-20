import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import toast, { ToastBar, Toaster } from "react-hot-toast";

type CommonProps = {
  cols?: number;
  rows?: number;
};

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const Form = ({ cols, rows }: CommonProps) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    subject: Yup.string().required("subject is required"),
    message: Yup.string().required("message is required"),
  });

  const handleSubmit = (values: Values) => {
    console.log(values);
    toast
      .promise(
        emailjs.send(
          "service_6kge3jc",
          "template_r16ahjb",
          values,
          "YmT0p5amxwnWAvpIW"
        ),
        {
          loading: "Sending...",
          success: "Message sent successfully!",
          error: "An error occured, please try again..",
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <form className="wrapper" onSubmit={formik.handleSubmit}>
              <h3>Please fill the form.</h3>
              <Toaster>
                {(t) => (
                  <ToastBar
                    toast={t}
                    style={{
                      ...t.style,
                      animation: t.visible
                        ? "custom-enter 1s ease"
                        : "custom-exit 1s ease",
                    }}
                  />
                )}
              </Toaster>
              <ErrorMessage
                name="firstName"
                component="span"
                className="error"
              />
              <div className="grouped margin">
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className={
                    errors.firstName && touched.firstName ? "input-error" : null
                  }
                />

                <Field
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className={
                    errors.lastName && touched.lastName ? "input-error" : null
                  }
                />
              </div>
              <div className="grouped">
                <div className="special__group">
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail address"
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                </div>
                <div className="special__group">
                  <ErrorMessage
                    name="subject"
                    component="span"
                    className="error"
                  />
                  <Field
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    className={
                      errors.subject && touched.subject ? "input-error" : null
                    }
                  />
                </div>
              </div>
              <div className="text__box">
                <ErrorMessage
                  name="message"
                  component="span"
                  className="error"
                />
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Enter message here....."
                  className={
                    errors.message && touched.message ? "input-error" : ""
                  }
                ></Field>
              </div>
              <button type="submit">Send</button>
            </form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.section`
  padding: 0 24px;
  display: flex;
  animation: slideUp 1s ease-in-out forwards;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 16px;
    color: var(--mainPurple);
  }

  input {
    width: 327px;
    display: block;
    padding: 14px 20px;
    left: 24px;
    top: 986px;
    border: 1px solid #fddfbb;
  }
  .input-error {
    border-color: #e63946;
  }
  .disabled-btn {
    cursor: not-allowed;
    background: var(--mainOrange);
    opacity: 0.7;
    :hover {
      box-shadow: none;
      color: white;
    }
  }

  .special__group,
  span {
    color: #e63946;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    font-weight: 400;
  }

  input + input,
  .grouped + .grouped,
  .special__group + .special__group {
    margin-top: 32px;
  }

  .margin {
    margin-top: 0 !important;
  }

  .text__box {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }

  textarea {
    width: 327px;
    /* height: 159px; */
    margin-bottom: 40px;
    padding: 14px 20px;
    border: 1px solid #fddfbb;
  }

  input::placeholder,
  textarea::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #b3b3b3;
  }

  @media (min-width: 768px) {
    .wrapper {
      padding: 55px 52px;
      margin-top: -12rem;
      background: #ffffff;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
    }
    .grouped {
      display: flex;
      margin-top: 32px;
    }
    input {
      width: 286px;
    }
    input + input,
    .special__group + .special__group {
      margin-top: 0;
      margin-left: 24px;
    }

    textarea {
      width: 606px;
      height: 159px;
    }
  }

  @media (min-width: 1000px) {
    .wrapper {
      padding: 106px 110px;
      margin-top: -15rem;
      margin-bottom: 200px;
    }

    input {
      width: 306px;
    }
    textarea {
      width: 636px;
    }
  }
`;

export default Form;
