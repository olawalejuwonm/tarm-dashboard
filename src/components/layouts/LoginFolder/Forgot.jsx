import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import {tryLogin} from '../../../redux/ActionCreators';
import {Affect, api} from '../../shared';
import Otp from './SendOtp';

const Forgot = () => {
  const login = useSelector((state) => state.login);
  const aref = useRef(null);
  // const dispatch = useDispatch();
  const [state, setState] = useState({load:false});
  // const [effect, setEffect] = useState({});

  if (login.loggedIn) {
    return <Redirect to="/" />;
  }

  // const effector = (state, effect) => {
  //   if (state) {
  //     effect()
  //   }
  // }
  const handleSubmit = async () => {
    setState(s => ({...s, load: true}))
    try {
      const be = await api(
        'GET',
        `auth/get-otp?email=${state.email}&type=password-reset`
      );
      console.log(be)
      // dispatch({type: 'get-otp/fulfilled', payload: be})
      setState(s => ({...s, load: false, effect: {message: be.message}, redirect: true}))
    } catch (error) {
      // dispatch({type: 'get-otp/rejected', payload: error})
      console.log(error)
      setState(s => ({...s, load: false, effect:{ error: true, message: error.message}}))

    }
 
    console.log(state);
  };

  if (state.redirect) {
    return <Otp message={state.effect.message} email={state.email} />
  }
  return (
    <>
      <div className="container-fluid login-height">
        <div className="login-form">
          <h2 className="text-white text-center mb-1">Forgot Password ?</h2>
          <p className="forgot-txt text-warning text-center pb-0" ref={aref}>
            Enter your email to get an Otp sent to you
          </p>
          <Affect load={state.load}  cref={aref.current} effect={state.effect}/>
          <p className="text" >{""}</p>
          <div className="form-group">
            <label className="label">
              Email<span className="text-danger span">*</span>{' '}
            </label>
            <input
              className="form-control mb-3"
              placeholder="Enter email"
              type="email"
              onChange={(e) => setState({email: e.target.value})}
            />
          </div>
          <button
            className="btn btn-light mt-3 px-4 text-dark link fw-bold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Forgot;
