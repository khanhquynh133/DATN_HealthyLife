/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ListMembers.css";
import LoadingSpinner from "../LoadingSpinner";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	adminGetUserById,
	adminUpdateUser,
} from "../../stores/users/userSlice";
import { userType } from "../../stores/users/userType";
import { useForm } from "react-hook-form";

const EditMember = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();
	const { user, isLoading, isSuccess } = useSelector((state) => state.users);
	const { register, handleSubmit } = useForm({
		defaultValues: {
			username: "khanhquynh",
			email: "khanhquynh@gmail.com",
			urlImage: "no",
			name: "quynh",
			gender: "female",
			phone: "",
			yob: "2000",
		},
	});

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(adminGetUserById(id));
	}, [id, dispatch]);

	useEffect(() => {
		if (isSuccess === userType.ADMIN_UDPATE_USER) {
			history.push(`detailmember/${id}`);
		}
	}, [isSuccess, id, history]);

	const submitForm = (data) => {
		console.log({ data });
		// dispatch(adminUpdateUser(data));
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<section className='edit-info p-5'>
			<div className='container'>
				<div className='row align-items-center justify-content-center'>
					<div className='col-md-4'>
						<img
							src={
								user?.urlImage
									? user?.urlImage
									: "https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
							}
							className='contact-img'
							alt='profile'
						/>
					</div>
					<div className='col-md-5'>
						<form className='row mb-5 my-2' onSubmit={handleSubmit(submitForm)}>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='UserName'
									{...register("username")}
									disabled
								/>
							</div>
							<div className='mb-2'>
								<input
									type='email'
									className='form-control'
									placeholder='Email'
									{...register("email")}
									disabled
								/>
							</div>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='ImageURL ...'
									{...register("photo")}
								/>
							</div>

							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Name'
									{...register("name")}
								/>
							</div>
							<div className='mb-2'>
								<label>Gender: </label>
								<div className='form-check'>
									<label htmlFor='female'>
										<input
											{...register("gender", { required: true })}
											type='radio'
											name='gender'
											value='female'
											className='form-check-input'
											id='female'
										/>
										Female
									</label>
								</div>
								<div className='form-check'>
									<label htmlFor='male'>
										<input
											{...register("gender", { required: true })}
											type='radio'
											name='gender'
											value='male'
											className='form-check-input'
											id='male'
										/>
										Male
									</label>
								</div>
							</div>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Phone'
									{...register("phone")}
								/>
							</div>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='YOB'
									{...register("yob")}
								/>
							</div>
							<div className='mb-2'>
								<input
									type='submit'
									className='btn btn-primary me-md-2'
									value='Update'></input>
								<Link to={"/listmembers"} className='btn btn-warning'>
									Back
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EditMember;
