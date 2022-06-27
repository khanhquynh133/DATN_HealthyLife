/** @format */

import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/carrotlogo.png";
import Slogan from "../../images/slogan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUtensils,
	faPlus,
	faHome,
	faBook,
	faPager,
	faPaperPlane,
	faNoteSticky,
	faReceipt,
	faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import userPhoto from "../../images/Group 2.png";
//import { useAuth } from "../SignUp/useAuth";

const Header = () => {
	//const auth = useAuth();
	let user = JSON.parse(localStorage.getItem("user-info"));
	const history = useHistory();
	function logout() {
		localStorage.clear();
		history.push("/");
	}
	return (
		<nav className='navbar navbar-expand navbar-light bg-white py-2 sticky-top'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					<img src={Logo} />
					<Link to='/' className='navbar-brand-2'>
						<img src={Slogan} />
					</Link>
				</Link>

				<ul className='navbar-nav align-items-center '>
					<li className='nav-item active'>
						<Link to='/' className='nav-link'>
							<FontAwesomeIcon icon={faHome} />
							<span className='badge bg-light text-dark'>Home</span>
						</Link>
					</li>
					<li className='nav-item active'>
						<Link to='/explore' className='nav-link'>
							<FontAwesomeIcon icon={faUtensils} />
							<span className='badge bg-light text-dark'>Explore</span>
						</Link>
					</li>

					<li className='nav-item active'>
						<Link to='/ownrecipes' className='nav-link'>
							<FontAwesomeIcon icon={faReceipt} />
							<span className='badge bg-light text-dark'>Own Recipes</span>
						</Link>
					</li>
					<li className='nav-item active'>
						<Link to='/newrecipe' className='nav-link'>
							<FontAwesomeIcon icon={faPlus} />
							<span className='badge bg-light text-dark'>New Recipe</span>
						</Link>
					</li>
					<li className='nav-item active'>
						<Link to='/listmembers' className='nav-link'>
							<FontAwesomeIcon icon={faPeopleGroup} />
							<span className='badge bg-light text-dark'>Manage Members</span>
						</Link>
					</li>
				</ul>
				<ul className='navbar-nav align-items-center'>
					<li className='nav-item'>
						{localStorage.getItem("user-info") ? (
							<Link to='/profile' className='nav-link'>
								{/* {auth.user.displayName} tên user*/}
								{user.email}
								<img
									className='ml-3 circle'
									// src={auth.user.photoURL ? auth.user.photoURL : userPhoto}
									src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'
									width='35px'
									alt=''
								/>
							</Link>
						) : (
							<Link></Link>
						)}
					</li>

					<li className='nav-item'>
						{localStorage.getItem("user-info") ? (
							<Link to='/signin' className='nav-link'>
								<button
									className='btn btn-warning rounded-pill '
									onClick={logout}>
									Logout
								</button>
							</Link>
						) : (
							<Link to='/signin' className='nav-link'>
								<button className='btn btn-warning rounded-pill '>
									Sign In
								</button>
							</Link>
						)}
					</li>
					{/* <li className='nav-item'>
						<Link to='/signin' className='nav-link'>
							<button className='btn btn-warning rounded-pill '>Sign In</button>
						</Link>
					</li> */}
					{/* <li className='nav-item'>
						{auth.user ? (
							<Link to='/account' className='nav-link'>
								{auth.user.displayName}
								<img
									className='ml-3 circle'
									src={auth.user.photoURL ? auth.user.photoURL : userPhoto}
									width='35px'
									alt=''
								/>
							</Link>
						) : (
							<Link to='/signup' className='nav-link'>
								Login
							</Link>
						)}
					</li>

					<li className='nav-item'>
						{auth.user ? (
							<Link to='/' className='nav-link'>
								<button
									onClick={() => {
										auth.signOut();
									}}
									className='btn btn-danger btn-rounded'>
									Sign Out
								</button>
							</Link>
						) : (
							<Link to='/signup' className='nav-link'>
								<button className='btn btn-danger btn-rounded'>Sign Up</button>
							</Link>
						)}
					</li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
