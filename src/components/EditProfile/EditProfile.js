/** @format */

import React, { useState } from "react";
import "./EditProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const EditProfile = () => {
	//const { id, name, creator, time, img } = props.food;

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
										src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'
										alt='Avatar'
										className='img-fluid my-5'
										style={{ width: 80 }}
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body p-4'>
										<h6>Edit Profile</h6>
										<hr className='mt-0 mb-4' />
										<div className='col-6 mb-3'>
											<h6>URL Image</h6>
											<input placeholder='http://...'></input>
										</div>
										<div className='col-6 mb-3'>
											<h6>Username</h6>
											<input placeholder='__13mar'></input>
										</div>
										<div className='col-6 mb-3'>
											<h6>Name</h6>
											<input placeholder='Quỳnh Hoàng'></input>
										</div>
										<div className='col-6 mb-3'>
											<h6>Gender</h6>
											<input placeholder='Female'></input>
										</div>
										<div className='col-6 mb-3'>
											<h6>Phone</h6>
											<input placeholder='0935001303'></input>
										</div>
										<div className='col-6 mb-3'>
											<h6>Y.O.B</h6>
											<input placeholder='2000'></input>
										</div>
										<div className='justify-content-flex-end'>
											<Link to={"/profile"}>
												<button
													onClick={() => window.scrollBy(0, 525)}
													className='btn btn-warning rounded-pill justify-content-md-end '>
													<b>Save</b>
												</button>
											</Link>
										</div>
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
