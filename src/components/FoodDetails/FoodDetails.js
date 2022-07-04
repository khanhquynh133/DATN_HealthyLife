/** @format */

import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './FoodDetails.css';
import { deleteRecipe, getRecipeById } from '../../stores/recipe/recipesSlice';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

const FoodDetails = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailRecipe, isLoading } = useSelector((state) => state.recipes);
  const { loginedUser } = useSelector((state) => state.auth);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRecipeById(id));
  }, [id, dispatch]);
  function goBack() {
    history.push('/explore');
    window.scrollTo(0, 9999);
  }

  const handleDelete = () => {
    dispatch(deleteRecipe(id));
    history.push('/');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="food-details container scrollable">
      {detailRecipe && detailRecipe?.recipe?.id_recipe == id && (
        <div className="row mb-5 my-5">
          <div className="col-md-7 pr-md-4">
            <h1 className="type-name my-3">{detailRecipe.recipe.name}</h1>
            <h5 className="name-style my-3">
              🖋 Description: {detailRecipe.recipe.description}
            </h5>
            <h5 className="name-style my-3">
              👥 Servings: {detailRecipe.recipe.servings} &nbsp; &nbsp; &nbsp;
              &nbsp;⏳ Total time: {''}
              {detailRecipe.recipe.time} minutes
            </h5>
            <h4 className="name-style my-3"> 📜 Ingredients </h4>
            <ul>
              {detailRecipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="name-style my-3">
                  {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
                </li>
              ))}
            </ul>
            <h4 className="name-style my-3"> 🍴 Directions </h4>
            <ul>
              {detailRecipe.recipe.directions.map((direction, index) => (
                <li key={index} className="name-style my-3">
                  Step {direction.step}: {direction.direction}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-5 ">
            <img
              className="img-fluid mb-2"
              src={detailRecipe.recipe.image}
              alt="food"
            />
          </div>
          <div>
            {detailRecipe?.creator?.id_user === loginedUser?.id_user ||
            loginedUser?.id_user == 1 ? (
              <>
                <Link
                  to={`/editfood/${id}`}
                  className="btn btn-danger rounded-pill my-3 me-md-2 name-type"
                >
                  <FontAwesomeIcon icon={faEdit} />
                  <span> Edit </span>
                </Link>
                <button
                  className="btn btn-danger rounded-pill my-3 me-md-2 name-type"
                  onClick={handleDelete}
                >
                  <FontAwesomeIcon icon={faClose} />
                  <span> Delete </span>
                </button>
              </>
            ) : (
              ''
            )}
            <button
              className="btn btn-danger rounded-pill my-3 name-type"
              onClick={goBack}
            >
              <FontAwesomeIcon icon={faClose} />
              <span> Close </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
