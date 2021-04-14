import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NewPassword = () => {

    const [NewPassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");

    const [NewPasswordError, setNewPasswordError] = useState({});
    const [passwordError, setPasswordError] = useState({});
    

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
    }

    const formValidation = () => {
        const NewPasswordError = {};
        const passwordError = {};
        
        

        let isValid = true;

        if (password.length < 6 || password === null) {
            passwordError.passwordShort = 'password too short';
            isValid = false;
        }

        
        if (NewPassword.length !== password) {
            NewPasswordError.NewPasswordShort = 'Password does not match, enter again';
            isValid = false;
        }

     
        

        setNewPasswordError(NewPasswordError);
        setPasswordError(passwordError);
        
        return isValid;
    }
    return (
        <>
            <div className="container-fluid login-height">
                <form className="login-form">
                    <h2 className="text-white text-center mb-5">Reset Password</h2>
                    <div className="form-group">
                        <label className="label">Password<span className="text-danger span">*</span> </label>
                        <input className="form-control mb-3"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        {Object.keys(passwordError).map((key) => {
                            return <div className="text-danger error">{passwordError[key]}</div>
                        })}
                        
                        
                    </div>
                    <div className="form-group">
                        <label className="label">Confirm Password<span className="text-danger span">*</span> </label>
                        <input className="form-control"
                            placeholder="Enter password"
                            type="password"
                            value={NewPassword}
                            onChange={(e) => { setNewPassword(e.target.value) }}
                        />
                        {Object.keys(NewPasswordError).map((key) => {
                            return <div className="text-danger">{NewPasswordError[key]}</div>
                        })}
                        
                    </div>
                    <div>
                    {/* <input type="submit" value="submit"/> */}

                        <Link to="login" className="btn btn-light mt-3 px-4 text-dark link fw-bold" onClick={onSubmit}>Reset</Link>
                    </div>
                    <Link to="/forgot_password" className="forgot-password d-flex justify-content-end text-white mb-3">Forgot Password?</Link>

                </form>


            </div>
        </>
    );
}

export default NewPassword;
