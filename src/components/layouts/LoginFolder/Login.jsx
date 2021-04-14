import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
  };

  const formValidation = () => {
    const emailError = {};
    const passwordError = {};

    let isValid = true;

    if (email.indexOf('@') === -1) {
      emailError.emailShort = 'Requires a valid email';
      isValid = false;
    }

    if (password.length < 10) {
      passwordError.passwordShort = 'password too long';
      isValid = false;
    }

    setEmailError(emailError);
    setPasswordError(passwordError);
    return isValid;
  };
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
            {Object.keys(emailError).map((key) => {
              return <div className="text-danger error">{emailError[key]}</div>;
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
            {Object.keys(passwordError).map((key) => {
              return <div className="text-danger">{passwordError[key]}</div>;
            })}
          </div>
          <div>
            {/* <input type="submit" value="submit"/> */}

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
