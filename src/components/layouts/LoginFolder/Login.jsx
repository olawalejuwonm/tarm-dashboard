import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { tryLogin } from '../../../redux/ActionCreators';
import { api, Loader, wrapPromise } from '../../shared';

const Login = () => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login);
  // console.log(login)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});


  // console.log(getMessage)
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      console.log(email, password)
      // dispatch(tryLogin())
    }

  };

  const formValidation = () => {
    const emailError = {};
    const passwordError = {};

    let isValid = true;

    if (email.indexOf('@') === -1) {
      emailError.emailShort = 'Requires a valid email';
      isValid = false;
    }

    if (password.length < 2) {
      passwordError.passwordShort = 'password too short';
      isValid = false;
    }

    setEmailError(emailError);
    setPasswordError(passwordError);
    return isValid;
  };

  const affect = (load) => {

  }
  return (
    <>
      <div className="container-fluid login-height">
        <form className="login-form">
          <h2 className="text-white text-center mb-5">Login</h2>
          <div className="form-group">
            <label className="label">
              Email<span className="text-danger span">*</span>{' '}
            </label>
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {Object.keys(emailError).map((key, i) => {
              return <div key={i} className="text-danger error">{emailError[key]}</div>;
            })}
          </div>
          <div className="form-group">
            <label className="label">
              Password<span className="text-danger span">*</span>{' '}
            </label>
            <input
              className="form-control"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {Object.keys(passwordError).map((key, i) => {
              return <div key={i} className="text-danger">{passwordError[key]}</div>;
            })}
          </div>
          <div>
            <Link
              to="/blog"
              className="btn btn-light mt-3 px-4 text-dark link fw-bold"
              onClick={onSubmit}
            >
              Login
            </Link>
          </div>
          <Link
            to="/forgot_password"
            className="forgot-password d-flex justify-content-end text-white mb-3"
          >
            Forgot Password?
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
