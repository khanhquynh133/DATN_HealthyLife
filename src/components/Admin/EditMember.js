/** @format */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import './ListMembers.css';
import LoadingSpinner from '../LoadingSpinner';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  adminGetUserById,
  adminUpdateUser,
} from '../../stores/users/userSlice';
import { userType } from '../../stores/users/userType';
import { useForm } from 'react-hook-form';

const EditMember = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, isLoading, isSuccess } = useSelector((state) => state.users);
  const { register, handleSubmit } = useForm({});

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(adminGetUserById(id));
  }, [id, dispatch]);
  console.log(user);

  useEffect(() => {
    if (isSuccess === userType.ADMIN_UDPATE_USER) {
      history.push(`/detailmember/${id}`);
    }
  }, [isSuccess, id, history]);

  const submitForm = (data) => {
    const { id_user } = user;
    dispatch(adminUpdateUser({ ...data, id_user }));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="edit-info p-5">
      {user && user?.id_user === +id && (
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <img
                src={
                  user?.urlImage
                    ? user?.urlImage
                    : 'https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png'
                }
                className="contact-img"
                alt="profile"
              />
            </div>
            <div className="col-md-5">
              <form
                className="row mb-5 my-2"
                onSubmit={handleSubmit(submitForm)}
              >
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    defaultValue={user?.username}
                    {...register('username')}
                    disabled
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    defaultValue={user?.email}
                    {...register('email')}
                    disabled
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ImageURL ..."
                    defaultValue={user?.urlImage}
                    {...register('urlImage')}
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    defaultValue={user?.name}
                    {...register('name')}
                  />
                </div>
                <div className="mb-2">
                  <label>Gender: </label>
                  <div className="form-check">
                    <label htmlFor="Female">
                      <input
                        {...register('gender', { required: true })}
                        type="radio"
                        name="gender"
                        value="Female"
                        className="form-check-input"
                        id="Female"
                        defaultChecked={user?.gender}
                      />
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <label htmlFor="Male">
                      <input
                        {...register('gender', { required: true })}
                        type="radio"
                        name="gender"
                        value="Male"
                        className="form-check-input"
                        id="Male"
                        defaultChecked={user?.gender}
                      />
                      Male
                    </label>
                  </div>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    defaultValue={user?.phone}
                    {...register('phone')}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="YOB"
                    defaultValue={user?.yob}
                    {...register('yob')}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary me-md-2"
                    value="Update"
                  ></input>
                  <Link to={'/listmembers'} className="btn btn-warning">
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EditMember;
