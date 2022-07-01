/** @format */

import React, { useState } from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const Profile = () => {
  const { loginedUser } = useSelector((state) => state.auth);
  return (
    <section className="vh-90" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-70">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div
                  className="col-md-4 gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: '.5rem',
                    borderBottomLeftRadius: '.5rem',
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="img-fluid my-5"
                    style={{ width: 80 }}
                  />

                  <h5>Quỳnh Hoàng</h5>

                  <Link to={'editprofile/' + loginedUser?.user_id}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">info@example.com</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Username</h6>
                        <p className="text-muted">__13mar</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">0935001303</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Gender</h6>
                        <p className="text-muted">Female</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>YOB</h6>
                        <p className="text-muted">2000</p>
                      </div>
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

export default Profile;
