/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    user: Yup.string().required('User field is required'),
    password: Yup.string().required('Password field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    Cookies.set('user', values.user, { expires: 1 / 24 });
    resetForm();
    navigate('/');
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4">
      <Formik
        initialValues={{ user: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="flex flex-col p-4 items-start bg-white rounded-md shadow-lg gap-6">
            <h1 className="self-center">Welcome!</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="user">User</label>
              <Field
                type="text"
                name="user"
                placeholder="Write here the user"
                className="border-b border-black/40 focus:outline-none"
              />
              {errors.user && touched.user && (
                <div className="error text-red-500">{errors.user}</div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Write here the password"
                className="border-b border-black/40 focus:outline-none"
              />
              {errors.password && touched.password && (
                <div className="error text-red-500">{errors.password}</div>
              )}
            </div>

            <button
              className="self-center border border-black/20 w-full py-2"
              type="submit"
              disabled={!isValid || !dirty}
            >
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
