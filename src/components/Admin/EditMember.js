/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ListMembers.css";

const EditMember = () => {
	return (
		// <section className='edit-info p-5'>
		// 	<div className='container'>

		// 		<div className='row '>
		// 			<div className='col-md-4'>

		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
		<section className='edit-info p-5'>
			<div className='container'>
				<div className='row align-items-center justify-content-center'>
					<div className='col-md-4'>
						<img
							src='https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png'
							className='contact-img'></img>
					</div>
					<div className='col-md-5'>
						<form>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='PhotoURL'
								/>
							</div>

							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Name'
								/>
							</div>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='UserName'
								/>
							</div>
							<div className='mb-2'>
								<input
									type='email'
									className='form-control'
									placeholder='Email'
								/>
							</div>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Gender'
								/>
							</div>
							<div className='mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Phone'
								/>
							</div>
							<div className='mb-2'>
								<input type='text' className='form-control' placeholder='YOB' />
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
