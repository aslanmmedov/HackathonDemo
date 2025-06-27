import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAddUserMutation } from '../../Redux/services/Userservice';
// import { AuthContext } from '../../Context/AuthContex';
// import { BASE_URL } from '../../Api/constants';

// console.log(BASE_URL);
function Register() {
  let [addUser] = useAddUserMutation()
  let navigate = useNavigate()
  // console.log(register);
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '', 
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
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
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await addUser(values);
      alert('User registered successfully');
      // navigate('/login');

    },
  });




  return (


    <div className='Auth'>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder='Name'
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <input
          id="surname"
          name="surname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          placeholder='Surname'
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div>{formik.errors.surname}</div>
        ) : null}

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

        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirm}
          placeholder='Confirm Password'
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
          <div>{formik.errors.passwordConfirm}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
      <div>Already have an account? <Link to="/login">Login</Link></div>
    </div>

  );
}

export default Register