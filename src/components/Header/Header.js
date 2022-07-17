/** @format */

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUtensils,
	faPlus,
	faHome,
	faReceipt,
	faPeopleGroup,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Logo from "../../images/carrotlogo.png";
import Slogan from "../../images/slogan.png";
import { logout, reset } from "../../stores/auth/authSlice";
import { ROLE } from "../../core/constants";

const Header = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { loginedUser } = useSelector((state) => state.auth);
	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());
		history.push("/");
	};

	return (
		<nav className='navbar navbar-expand navbar-light bg-white py-2 sticky-top'>
			<div className='container'>
				<Link to='/' className='navbar-brand-2'>
					<img src={Logo} alt='logo' />
					<img src={Slogan} alt='slogan' />
				</Link>

				<ul className='navbar-nav align-items-center '>
					<li className='nav-item active'>
						<Link to='/' className='nav-link'>
							<FontAwesomeIcon icon={faHome} />
							<span className='badge bg-light text-dark name-style'>Home</span>
						</Link>
					</li>
					<li className='nav-item active'>
						<Link to='/explore' className='nav-link'>
							<FontAwesomeIcon icon={faUtensils} />
							<span className='badge bg-light text-dark name-style'>
								Explore
							</span>
						</Link>
					</li>

					{loginedUser?.id_user &&
						loginedUser?.roles[0].role === ROLE.ROLE_USER && (
							<>
								<li className='nav-item active'>
									<Link to='/newrecipe' className='nav-link'>
										<FontAwesomeIcon icon={faPlus} />
										<span className='badge bg-light text-dark name-style'>
											New Recipe
										</span>
									</Link>
								</li>
								<li className='nav-item active'>
									<Link to='/ownrecipes' className='nav-link'>
										<FontAwesomeIcon icon={faReceipt} />
										<span className='badge bg-light text-dark name-style'>
											Own Recipes
										</span>
									</Link>
								</li>
								<li className='nav-item active'>
									<Link
										to='/favoriterecipes'
										className='nav-link name-style name-style'>
										<FontAwesomeIcon icon={faHeart} />
										<span className='badge bg-light text-dark'>
											Favorite Recipes
										</span>
									</Link>
								</li>
							</>
						)}
					{loginedUser?.id_user &&
						loginedUser?.roles[0]?.role === ROLE.ROLE_ADMIN && (
							<li className='nav-item active'>
								<Link to='/listmembers' className='nav-link'>
									<FontAwesomeIcon icon={faPeopleGroup} />
									<span className='badge bg-light text-dark name-style'>
										Manage Members
									</span>
								</Link>
							</li>
						)}
				</ul>
				<ul className='navbar-nav align-items-center'>
					<li className='nav-item'>
						{loginedUser?.id_user && (
							<Link to='/profile' className='nav-link me-md-2 name-style'>
								<b>{loginedUser?.username} </b>{" "}
								<img
									className='ml-3 circle'
									src={
										loginedUser.urlImage
											? loginedUser.urlImage
											: "https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
									}
									width='35px'
									alt=''
								/>
							</Link>
						)}
					</li>
					<li className='nav-item'>
						{loginedUser?.id_user ? (
							<>
								<button
									className='btn btn-warning rounded-pill fw-bold name-style'
									onClick={handleLogout}>
									Logout
								</button>
							</>
						) : (
							<>
								<Link to='/signin' className='nav-link'>
									<button className='btn btn-warning rounded-pill fw-bold name-style'>
										Sign In
									</button>
								</Link>
							</>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
