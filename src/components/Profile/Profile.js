/** @format */

import React, { useState, useEffect } from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import authStorageService from "../../core/authStorage.service";
import { getUserInfo } from "../../stores/auth/authSlice";
import { ROLE } from "../../core/constants";
const Profile = () => {
	const { loginedUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const token = authStorageService().getToken();

	useEffect(() => {
		if (token && !loginedUser?.id_user) {
			dispatch(getUserInfo());
		}
	}, [loginedUser, token, dispatch]);

	return (
		<section className='vh-90' style={{ backgroundColor: "#f4f5f7" }}>
			{loginedUser?.id_user && (
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
											className='my-4'
											style={{ width: 100, height: 100, borderRadius: 50 }}
										/>

										<h6 className='name-style'>
											<b>{loginedUser?.name}</b>
										</h6>
										{loginedUser?.roles[0].role !== ROLE.ROLE_ADMIN && (
											<Link to={"editprofile/" + loginedUser?.user_id}>
												<FontAwesomeIcon icon={faEdit} />
											</Link>
										)}
									</div>
									<div className='col-md-8 name-style'>
										<div className='card-body p-4'>
											<h6>
												<b>Information</b>
											</h6>
											<hr className='mt-0 mb-4' />
											<div className='row pt-1'>
												<div className='col-6 mb-3'>
													<h6>Username</h6>
													<p className='text-muted'>{loginedUser?.username}</p>
												</div>

												<div className='col-6 mb-3'>
													<h6>Email</h6>
													<p className='text-muted'>{loginedUser?.email}</p>
												</div>
												{loginedUser?.roles[0].role === ROLE.ROLE_USER && (
													<>
														<div className='col-6 mb-3'>
															<h6>Phone</h6>
															<p className='text-muted'>{loginedUser?.phone}</p>
														</div>
														<div className='col-6 mb-3'>
															<h6>Gender</h6>
															<p className='text-muted'>
																{loginedUser?.gender}
															</p>
														</div>
														<div className='col-6 mb-3'>
															<h6>YOB</h6>
															<p className='text-muted'>{loginedUser?.yob}</p>
														</div>
													</>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Profile;
