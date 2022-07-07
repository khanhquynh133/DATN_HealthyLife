/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import Logo from "../../images/carrotlogo.png";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Form from "../../utilities/Forms";
import Validate from "../SignIn/ValidateSignInForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../stores/auth/authSlice";
import LoadingSpinner from "../LoadingSpinner";
import authStorageService from "../../core/authStorage.service";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [validate, setValidate] = useState({});
	const history = useHistory();
	const dispatch = useDispatch();
	const { loginedUser, isLoading, message } = useSelector(
		(state) => state.auth
	);
	const token = authStorageService().getToken();
	useEffect(() => {
		if (loginedUser || token) {
			history.push("/");
		}
	}, [loginedUser, history, token]);
	const togglePassword = (e) => {
		if (showPassword) {
			setShowPassword(false);
		} else {
			setShowPassword(true);
		}
	};
	const validateLogin = () => {
		let isValid = true;

		let validator = Form.validator({
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

		const validate = validateLogin();

		if (validate) {
			setValidate({});
		}
		const user = { email, password };
		dispatch(login(user));
	};
	if (isLoading) {
		return <LoadingSpinner />;
	}
	return (
		<div className='sign-in'>
			<div className='container'>
				<div className='logo text-center py-4'>
					<Link to='/'>
						<img src={Logo} alt='' />
					</Link>
				</div>
				<form className='py-1' autoComplete={"off"} onSubmit={submitForm}>
					<h1 className='lead text-center py-3'>Welcome back!</h1>
					<div className='form-group'>
						<input
							id='email'
							name='email'
							value={email}
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							className={`form-control ${
								validate.validate && validate.validate.email
									? "is-invalid "
									: ""
							}`}
							placeholder='email@email.com'
						/>
						<div
							className={`invalid-feedback text-start ${
								validate.validate && validate.validate.email
									? "d-block"
									: "d-none"
							}`}>
							{validate.validate && validate.validate.email
								? validate.validate.email[0]
								: ""}
						</div>
					</div>
					<div className='form-group my-4 pass-box'>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='form-control'
							placeholder='password'
						/>
						<button
							type='button'
							className='btn btn-f5f5f5 btn-sm btn-eye'
							onClick={(e) => togglePassword(e)}>
							<FontAwesomeIcon
								icon={showPassword ? faEye : faEyeSlash}></FontAwesomeIcon>{" "}
						</button>
						<div
							className={`invalid-feedback text-start ${
								validate.validate && validate.validate.password
									? "d-block"
									: "d-none"
							}`}>
							{validate.validate && validate.validate.password
								? validate.validate.password[0]
								: ""}
						</div>
					</div>
					<div className='text-center mb-2'>
						<span className='textcolor '>
							<b>{message}</b>
						</span>
					</div>
					<div className='form-group text-center'>
						<button
							className='btn btn-warning fw-bolder'
							type='submit'
							disabled={isLoading}>
							Sign In
						</button>
					</div>

					<div className='option text-center my-2'>
						<Link to='/signup' className='nav-link'>
							<label>
								Don't have an account? <u>Sign up</u>
							</label>
						</Link>
					</div>
				</form>
			</div>
		</div>
		// <div className='col sm-6 offset-sm-3'>
		// 	<input
		// 		type='text'
		// 		placeholder='email'
		// 		onChange={(e) => setEmail(e.target.value)}
		// 		className='form-control'
		// 	/>
		// 	<br />
		// 	<input
		// 		type='password'
		// 		placeholder='password'
		// 		onChange={(e) => setPassword(e.target.value)}
		// 		className='form-control'
		// 	/>
		// 	<br />
		// 	<button onClick={login} className='btn btn-primary'>
		// 		Login
		// 	</button>
		// </div>
	);
};

export default SignIn;
