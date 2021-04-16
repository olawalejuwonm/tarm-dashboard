import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Affect, api} from '../../shared';

const Otp = ({message, email}) => {
  const [state, setState] = useState({load: false});
  const aref = useRef(null);

  useEffect(() => {
    setState((s) => ({...s, email}));
  }, [setState]);

  const handleOtp = async () => {
    setState((s) => ({...s, load: true}));
    try {
      const be = await api(
        'GET',
        `auth/get-otp?email=${state.email}&type=password-reset`
      );
      console.log(be);
      // dispatch({type: 'get-otp/fulfilled', payload: be})
      setState((s) => ({
        ...s,
        load: false,
        effect: {message: be.message},
        redirect: true,
      }));
    } catch (error) {
      // dispatch({type: 'get-otp/rejected', payload: error})
      console.log(error);
      setState((s) => ({
        ...s,
        load: false,
        effect: {error: true, message: error.message},
      }));
    }
  };

  const handleSubmit = async () => {
    setState((s) => ({...s, load: true}));
    try {
      const be = await api('POST', `auth/password/reset/${state.token}`, {
        password: state.password,
        confirmPassword: state.confirmPassword,
      });
      console.log(be);
      setState((s) => ({
        ...s,
        load: false,
        effect: {message: be.message},
        redirect: true,
      }));
    } catch (error) {
      // dispatch({type: 'get-otp/rejected', payload: error})
      console.log(error);
      setState((s) => ({
        ...s,
        load: false,
        effect: {error: true, message: error.message},
      }));
    }

    console.log(state);
  };

  return (
    <>
      <div className="container-fluid login-height">
        <div className="login-form">
          <h2 className="text-white text-center my-4">Enter Otp</h2>
          <p className="forgot-txt text-success text-center pb-3" ref={aref}>
            {message}
          </p>
          <Affect load={state.load} cref={aref.current} effect={state.effect} />
          <div className="form-group">
            <input
              className="form-control mb-3"
              placeholder="Enter Otp"
              type="text"
              onChange={(e) => setState((s) => ({...s, token: e.target.value}))}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control mb-3"
              type="password"
              required
              placeholder="Enter Password"
              onChange={(e) =>
                setState((s) => ({...s, password: e.target.value}))
              }
              type="text"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control mb-3"
              type="password"
              required
              placeholder="Confirm Password"
              onChange={(e) =>
                setState((s) => ({...s, confirmPassword: e.target.value}))
              }
              type="text"
            />
          </div>
          <div
            className="btn btn-light mt-3 px-4 text-dark link fw-bold"
            onClick={handleOtp}
          >
            Resend Otp
          </div>

          <div
            className="btn btn-light mt-3 px-4 text-dark link fw-bold"
            onClick={handleSubmit}
          >
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
