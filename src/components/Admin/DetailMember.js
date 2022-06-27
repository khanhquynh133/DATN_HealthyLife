/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faEdit,
	faPen,
	faTrainSubway,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

import "./ListMembers.css";

const DetailMember = () => {
	return (
		<section className='view-info p-5'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-md-4'>
						<img
							src='https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png'
							className='contact-img'></img>
					</div>
					<div className='col-md-8'>
						<ul className='list-group'>
							<li className='list-group-item list-group-item-action'>
								Username:<span className='fw-bold'> _13mar </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								Name:<span className='fw-bold'> Quỳnh Hoàng </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								Email:
								<span className='fw-bold'> khanhquynh133@gmail.com </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								Gender:<span className='fw-bold'> Female </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								Phone:<span className='fw-bold'> 0935001303 </span>
							</li>
							<li className='list-group-item list-group-item-action'>
								YOB:<span className='fw-bold'> 2000 </span>
							</li>
						</ul>
					</div>
				</div>
				<div className='d-flex justify-content-end my-2'>
					<Link to={"/listmembers"} className='btn btn-warning'>
						Back
					</Link>
				</div>
			</div>
		</section>
	);
};

export default DetailMember;
