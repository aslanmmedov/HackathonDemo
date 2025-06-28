import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../register/index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../Redux/services/Userservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let [loginUser] = useLoginUserMutation()
  let navigate = useNavigate();
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
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setTimeout(() => {
        toast.success('Login successful!', {
          position: "top-right",
        });
      }, 3000);

      navigate('/')


    },
  });

  return (


    <div className='Auth'>
      <ToastContainer />
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

        <Link to="/forgot-password"  style={{alignSelf:'flex-end'}}>Forgot Password?</Link>
        <button type="submit">Submit</button>
      </form>
      <div>Don't have an account? <Link to="/register">Register</Link></div>
    </div>

  );
}

export default Login