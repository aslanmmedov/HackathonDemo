import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../register/index.scss';
import { Link } from 'react-router-dom';
const Login = () => {
   const formik = useFormik({
      initialValues: {
  
        username: '',
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
         
        surname: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
  
  
      <div className='Auth'>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
      
       
  
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder='User Name'
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
  
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder='Email'
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
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