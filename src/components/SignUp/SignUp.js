/** @format */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../images/carrotlogo.png';
import './SignUp.css';
import Form from '../../utilities/Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../stores/auth/authSlice';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      name: {
        value: name,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const validate = validateRegister();

    const user = { username: name, email, password };
    if (validate) {
      setValidate({});
      dispatch(register(user));
    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="sign-up">
      <div className="container">
        <div className="logo text-center py-4">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <form className="py-3" onSubmit={submitForm}>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${
                validate.validate && validate.validate.name ? 'is-invalid ' : ''
              }`}
              id="name"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.name
                  ? 'd-block'
                  : 'd-none'
              }`}
            >
              {validate.validate && validate.validate.name
                ? validate.validate.name[0]
                : ''}
            </div>
          </div>

          <div className="form-group my-4">
            <input
              type="email"
              className={`form-control ${
                validate.validate && validate.validate.email
                  ? 'is-invalid '
                  : ''
              }`}
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.email
                  ? 'd-block'
                  : 'd-none'
              }`}
            >
              {validate.validate && validate.validate.email
                ? validate.validate.email[0]
                : ''}
            </div>
          </div>

          <div className="form-group my-4 pass-box">
            <input
              type={showPassword ? 'text' : 'password'}
              className={`form-control ${
                validate.validate && validate.validate.password
                  ? 'is-invalid '
                  : ''
              }`}
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.password
                  ? 'd-block'
                  : 'd-none'
              }`}
            >
              {validate.validate && validate.validate.password
                ? validate.validate.password[0]
                : ''}
            </div>
            <button
              type="button"
              className="btn btn-f5f5f5 btn-sm btn-eye"
              onClick={(e) => togglePassword(e)}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
              ></FontAwesomeIcon>{' '}
            </button>
          </div>

          {/* <div className="form-group my-4 pass-box">
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirm_password"
              className="form-control"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              className="btn btn-f5f5f5 btn-sm btn-eye"
              onClick={(e) => togglePassword(e)}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
              ></FontAwesomeIcon>{' '}
            </button>
          </div> */}

          <div className="form-group text-center my-2">
            <button className="btn btn-warning fw-bolder" type="submit">
              Sign Up
            </button>
          </div>

          <div className="option text-center ">
            <Link to="/signin" className="nav-link">
              <label>Already have an account</label>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
