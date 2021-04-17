import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { tryLogin } from '../../../redux/ActionCreators';
import { Affect } from '../../shared';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  // const [load, sLoad] = useState(false);
  const aref = useRef(null)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});


  // console.log(getMessage)
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      dispatch(tryLogin({body: {email, password}, url: "auth/login", point: "POST"},))

    }

      // console.log(email, password)

  };

  const formValidation = () => {
    const emailError = {};
    const passwordError = {};

    let isValid = true;

    if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
      emailError.emailShort = 'Requires a valid email';
      isValid = false;
    }


    setEmailError(emailError);
    return isValid;
  };


  // console.log(location)
  let from = location.state
  if (login.loggedIn) {
    return <Redirect to={from ? from.from.pathname: "/"} />
  }

  // affect(login.isLoading, aref.current, login)
  return (
    <>
      <div className="container-fluid login-height">

        <form className="login-form">
          <h2 className="text-white text-center mb-1">Login</h2>
          <div className="text-danger">{emailError.emailShort}</div>

          <h3 className="text" ref={aref} >{""}</h3>
          <Affect cref={aref.current} load={login.isLoading} effect={login} />
          <div className="form-group">
            <label className="label">
              Email<span className="text-danger span">*</span>{' '}
            </label>
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            
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
            <Link
            to="/forgot_password"
            className="forgot-password d-flex justify-content-end text-white mb-3"
          >
            Forgot Password?
          </Link>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default Login;
