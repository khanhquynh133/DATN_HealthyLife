/** @format */

import React from "react";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidateSignInForm = () => (
	<Formik
		initialValues={{ email: "", password: "" }}
		onSubmit={(values, { setSubmitting }) => {
			setTimeout(() => {
				console.log("Logging in", values);
				setSubmitting(false);
			}, 500);
		}}>
		{(props) => {
			const {
				values,
				touched,
				errors,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
			} = props;

			return (
				<div>
					<h1>Validated Login Form</h1>
				</div>
			);
		}}
	</Formik>
);

export default ValidateSignInForm;
