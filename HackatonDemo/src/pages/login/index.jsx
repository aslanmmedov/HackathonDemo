import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../register/index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../Redux/services/Userservice';
// import Cookies from 'js-cookie';

const Login = () => {
  let [loginUser] = useLoginUserMutation()
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {

      usernameOrEmail: '',
      password: '',
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string()
        .max(50, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const response = await loginUser(values).unwrap()

      // const now = new Date();

      // const accessExpiry = new Date(now.getTime() + 5 * 1000);

      // const refreshExpiry = new Date(now.getTime() + 600 * 60 * 1000);

      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      // Cookies.set('accessToken', response.data.accessToken, { expires: accessExpiry });
      // Cookies.set('refreshToken', response.data.refreshToken, { expires: refreshExpiry });
      navigate('/')


    },
  });

  return (


    <div className='Auth'>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>



        <input
          id="usernameOrEmail"
          name="usernameOrEmail"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.usernameOrEmail}
          placeholder='Username or Email'
        />
        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
          <div>{formik.errors.usernameOrEmail}</div>
        ) : null}

        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder='Password'
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}


        <button type="submit">Submit</button>
      </form>
      <div>Don't have an account? <Link to="/register">Register</Link></div>
    </div>

  );
}

export default Login