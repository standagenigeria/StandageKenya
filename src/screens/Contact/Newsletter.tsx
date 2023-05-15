import { ErrorMessage, Field, Formik, useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { ToastBar, Toaster } from "react-hot-toast";

type DefaultProps = {
  tagLine?: string;
};

type Values = {
  email: string;
}

const Newsletter = ({ tagLine }: DefaultProps) => {

  const initialValues = {
    email: "",
  }

  const newsLetterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required")
  });

  const handleSubmit = (values: Values) => {
    console.log(values);
    toast
      .promise(
        emailjs.send(
          "service_6kge3jc",
          "Newsletter_fssf445",
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
    <NewsContainer>
      <div className="wrapper">
      <h2>Subscribe to our Newsletter!</h2>
      <p>
        {tagLine
          ? tagLine
          : "Get to know more about our products. Subscribe with your email address"}
      </p>
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
   
     <Formik
        initialValues={initialValues}
        validationSchema={newsLetterSchema}
        onSubmit={(values : any) => handleSubmit(values)}
      >
        {(formik : any) => {
          const { errors, touched } = formik;
          return (
            <>
            <ErrorMessage name="email" component="span" className="error" />
            <form className="form" onSubmit={formik.handleSubmit}>
              <Field
                id="email"
                name="email"
                type="email"
                className={
                  errors.email && touched.email ? "input-error" : null
                }
                placeholder="Enter your e-mail address"
              />
              <div className="button__container">
                <button type="submit">Subscribe</button>
              </div>
            </form>
            </>
          );
        }}
      </Formik> 
      </div>
    </NewsContainer>
  );
};

const NewsContainer = styled.div`
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper{
    background: #FFFAF4;
    padding: 50px 40px;
  }
  
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: var(--mainPurple);
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 40px;
    color: var(--fontColor);
  }
  .input-error {
    border-color: #e63946 !important;
  }
  span {
    color: #e63946;
    font-size: 0.8rem;
    margin-bottom: 1rem;

  }
  .form {
    input {
      width: 80vw;
      height: 40px;
      padding: 10px;
      border: 1px solid var(--mainOrange);
      ::placeholder {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #808080;
      }
    }
    .button__container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      margin-top: 16px;
      background: var(--mainOrange);
    }
    button:hover {
      box-shadow: 0px 2px 10px 5px var(--mainOrange);
      color: #ffffff;
    }

    button:after {
      background: var(--mainOrange) !important;
    }
  }

  @media (min-width: 768px) {
    .wrapper{
    background: #FFFAF4;
    padding:80px 150px;
  }

    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
    .form {
      display: flex;
      button {
        margin-top: 0;
        width: 172px;
        height: 48px;
      }
      input {
        width: 368px;
        height: 48px;
      }
    }
  }
`;

export default Newsletter;
