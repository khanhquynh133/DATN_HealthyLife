/** @format */

import "./EditProfile.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import authStorageService from "../../core/authStorage.service";
import { getUserInfo, updateUser } from "../../stores/auth/authSlice";
import { userType } from "../../stores/users/userType";
import { authType } from "../../stores/auth/authType";
import { useForm } from "react-hook-form";

const EditProfile = () => {
	const { loginedUser, isSuccess, isLoading } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();
	const token = authStorageService().getToken();
	const history = useHistory();
	const { register, handleSubmit } = useForm({});

	useEffect(() => {
		if (token && !loginedUser?.id_user) {
			dispatch(getUserInfo());
		}
	}, [loginedUser, token, dispatch]);
	useEffect(() => {
		if (isSuccess === authType.UPDATE_USER) {
			history.push(`/profile`);
		}
	}, [isSuccess, history]);

	const submitForm = (data) => {
		console.log(data);
		dispatch(updateUser({ ...data }));
	};

	return (
		<section className='vh-90' style={{ backgroundColor: "#f4f5f7" }}>
			<div className='container py-5 h-70'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-lg-6 mb-4 mb-lg-0'>
						<div className='card mb-3' style={{ borderRadius: ".5rem" }}>
							<div className='row g-0'>
								<div
									className='col-md-4 gradient-custom text-center text-white'
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomLeftRadius: ".5rem",
									}}>
									<img
										src={
											loginedUser?.urlImage
												? loginedUser?.urlImage
												: "https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
										}
										style={{
											width: 100,
											height: 100,
											borderRadius: 50,
											marginTop: 50,
										}}
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body p-4'>
										<h6>Edit Profile</h6>
										<hr className='mt-0 mb-4' />
										<form
											className='row mb-3 my-2 name-style'
											onSubmit={handleSubmit(submitForm)}>
											<div className='mb-2'>
												<span classname='mb-1'>
													<b> Name: </b>
												</span>
												<input
													type='text'
													className='form-control'
													placeholder='Name'
													defaultValue={loginedUser?.name}
													{...register("name")}
												/>
											</div>
											<div className='mb-2'>
												<span classname='mb-1'>
													<b> UserName: </b>{" "}
												</span>
												<input
													type='text'
													className='form-control'
													placeholder='UserName'
													defaultValue={loginedUser?.username}
													{...register("username")}
													disabled
												/>
											</div>
											<div className='mb-2'>
												<span classname='mb-1'>
													<b> Email: </b>
												</span>
												<input
													type='email'
													className='form-control'
													placeholder='Email'
													defaultValue={loginedUser?.email}
													{...register("email")}
													disabled
												/>
											</div>
											<div className='mb-2'>
												<span classname='mb-1'>
													<b> Image URL: </b>
												</span>
												<input
													type='text'
													className='form-control'
													placeholder='ImageURL ...'
													defaultValue={loginedUser?.urlImage}
													{...register("urlImage")}
												/>
											</div>

											<div className='mb-2'>
												<span classname='mb-1'>
													<b> Gender: </b>
												</span>
												<div className='form-check'>
													<label htmlFor='Female'>
														<input
															{...register("gender", { required: true })}
															type='radio'
															name='gender'
															value='Female'
															className='form-check-input'
															id='Female'
															checked={loginedUser?.gender}
														/>
														Female
													</label>
												</div>
												<div className='form-check'>
													<label htmlFor='Male'>
														<input
															{...register("gender", { required: true })}
															type='radio'
															name='gender'
															value='Male'
															className='form-check-input'
															id='Male'
															checked={loginedUser?.gender}
														/>
														Male
													</label>
												</div>
											</div>
											<div className='mb-2'>
												<span classname='mb-1'>
													<b> Phone: </b>
												</span>
												<input
													type='text'
													className='form-control'
													placeholder='Phone'
													defaultValue={loginedUser?.phone}
													{...register("phone")}
												/>
											</div>
											<div className='mb-2'>
												<span classname='mb-1'>
													<b> Year of Birth: </b>
												</span>
												<input
													type='text'
													className='form-control'
													placeholder='YOB'
													defaultValue={loginedUser?.yob}
													{...register("yob")}
												/>
											</div>
											<div className='mb-2'>
												<input
													type='submit'
													disabled={isLoading}
													className='btn btn-primary rounded-pill my-3 me-md-2'
													value='Save'></input>
												<Link
													to='/profile'
													className='btn btn-danger rounded-pill my-3 name-type'>
													<span> Back </span>
												</Link>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EditProfile;
