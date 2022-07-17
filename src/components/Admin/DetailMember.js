/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
	faEdit,
	faPen,
	faTrainSubway,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

import "./ListMembers.css";
import { adminGetUserById } from "../../stores/users/userSlice";
import LoadingSpinner from "../LoadingSpinner";

const DetailMember = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();
	const { user, isLoading } = useSelector((state) => state.users);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(adminGetUserById(id));
	}, [id, dispatch]);

	if (isLoading) {
		return <LoadingSpinner />;
	}
	console.log(user);

	return (
		<section className='view-info p-5'>
			<div className='container '>
				<div className='row align-items-center'>
					<div className='col-md-4'>
						<img
							src={
								user?.urlImage
									? user?.urlImage
									: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
							}
							className='contact-img'
							alt='profile'
						/>
					</div>
					<div className='col-md-8 '>
						<ul className='list-group '>
							<li className='list-group-item list-group-item-action'>
								<b>Username:</b>
								<span className='name-style'> {user?.username} </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								<b>Name: </b>
								<span className='name-style'> {user?.name} </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								<b>Email:</b>
								<span className='name-style'> {user?.email} </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								<b>Gender:</b>
								<span className='name-style'> {user?.gender} </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								<b>Phone:</b>
								<span className='name-style'> {user?.phone} </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								<b>YOB:</b>
								<span className='name-style'> {user?.yob} </span>
							</li>
						</ul>
					</div>
				</div>
				<div className='d-flex justify-content-end my-2 '>
					<Link
						to={"/listmembers"}
						className='btn btn-warning fw-bold name-style'>
						Back
					</Link>
				</div>
			</div>
		</section>
	);
};

export default DetailMember;
