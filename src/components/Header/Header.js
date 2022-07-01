/** @format */

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/carrotlogo.png';
import Slogan from '../../images/slogan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-solid-svg-icons';
import userPhoto from '../../images/Group 2.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../stores/auth/authSlice';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loginedUser } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    history.push('/');
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white py-2 sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
          <img src={Slogan} alt="slogan" />
        </Link>

        <ul className="navbar-nav align-items-center ">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} />
              <span className="badge bg-light text-dark">Home</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/explore" className="nav-link">
              <FontAwesomeIcon icon={faUtensils} />
              <span className="badge bg-light text-dark">Explore</span>
            </Link>
          </li>

          {loginedUser?.id_user && (
            <>
              <li className="nav-item active">
                <Link to="/newrecipe" className="nav-link">
                  <FontAwesomeIcon icon={faPlus} />
                  <span className="badge bg-light text-dark">New Recipe</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/ownrecipes" className="nav-link">
                  <FontAwesomeIcon icon={faReceipt} />
                  <span className="badge bg-light text-dark">Own Recipes</span>
                </Link>
              </li>
            </>
          )}
          {/* <li className="nav-item active">
            <Link to="/listmembers" className="nav-link">
              <FontAwesomeIcon icon={faPeopleGroup} />
              <span className="badge bg-light text-dark">Manage Members</span>
            </Link>
          </li> */}
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            {loginedUser?.id_user && (
              <Link to="/profile" className="nav-link">
                {loginedUser?.username}
                {loginedUser?.email}
                <img
                  className="ml-3 circle"
                  // src={auth.user.photoURL ? auth.user.photoURL : userPhoto}
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  width="35px"
                  alt=""
                />
              </Link>
            )}
          </li>
          <li className="nav-item">
            {loginedUser?.id_user ? (
              <>
                <button
                  className="btn btn-warning rounded-pill "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="nav-link">
                  <button className="btn btn-warning rounded-pill ">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </li>
          {/* <li className='nav-item'>
						<Link to='/signin' className='nav-link'>
							<button className='btn btn-warning rounded-pill '>Sign In</button>
						</Link>
					</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
