/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ListMembers.css";

const ListMembers = () => {
	return (
		<section className='contact-list p-5'>
			<div className='container'>
				<p className='h3 fw-bold '> Members in system</p>
				<div className='row'>
					<div className='col-md-6'>
						<div className='card'>
							<div className='card-body'>
								<div className='row align-items-center d-flex justify-content-around'>
									<div className='col-md-5'>
										{" "}
										<img
											src='https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png'
											className='contact-img'></img>
									</div>
									<div className='col-md-7'>
										<ul className='list-group'>
											<li className='list-group-item list-group-item-action'>
												Name:<span className='fw-bold'> Quỳnh Hoàng </span>
											</li>
											<li className='list-group-item list-group-item-action'>
												Email:
												<span className='fw-bold'>
													{" "}
													khanhquynh133@gmail.com{" "}
												</span>
											</li>
											<li className='list-group-item list-group-item-action'>
												Phone:<span className='fw-bold'> 0935001303 </span>
											</li>
										</ul>
									</div>
								</div>
								<div className='col-md-1 d-flex flex-row  '>
									<Link
										to={"/detailmember"}
										className='btn btn-warning my-2 me-md-2'>
										<FontAwesomeIcon icon={faEye} />
									</Link>
									<Link
										to={"/editmember"}
										className='btn btn-primary my-2 me-md-2'>
										<FontAwesomeIcon icon={faPen} />
									</Link>
									<Link className='btn btn-danger my-2 '>
										<FontAwesomeIcon icon={faTrash} />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ListMembers;
