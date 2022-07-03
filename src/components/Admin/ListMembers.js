/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import './ListMembers.css';
import {
  adminDeleteUserById,
  adminGetAllUsers,
} from '../../stores/users/userSlice';
import { userType } from '../../stores/users/userType';
import LoadingSpinner from '../LoadingSpinner';

const ListMembers = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(adminGetAllUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    console.log('delete');
    dispatch(adminDeleteUserById(userId));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="contact-list p-5">
      <div className="container">
        <p className="h3 fw-bold "> Members in system</p>
        <div className="row">
          {users.map((item) => (
            <div key={item.id_user} className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-5">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                        className="contact-img"
                        alt="profile"
                      ></img>
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name:
                          <span className="fw-bold"> {item.username} </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email:
                          <span className="fw-bold">{item.email}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Phone:<span className="fw-bold">{item.phone}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1 d-flex flex-row  ">
                    <Link
                      to={`/detailmember/${item.id_user}`}
                      className="btn btn-warning my-2 me-md-2"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Link
                      to={`/editmember/${item.id_user}`}
                      className="btn btn-primary my-2 me-md-2"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </Link>
                    <button
                      className="btn btn-danger my-2 "
                      onClick={() => handleDeleteUser(item.id_user)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListMembers;
