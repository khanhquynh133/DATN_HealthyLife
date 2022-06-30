/** @format */

import { faClose, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EditFood.css';
import { getRecipeById } from '../../stores/recipe/recipesSlice';
import { Link } from 'react-router-dom';
import FormFood from '../FormFood/FormFood';
import RecipeForm from '../RecipeForm';
const EditFood = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { editRecipe } = useSelector((state) => state.recipes);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRecipeById(id));
  }, [id, dispatch]);
  function goBack() {
    history.push('/');
    window.scrollTo(0, 9999);
  }
  return (
    <div className="food-details container scrollable">
      {/* {editRecipe.map((food) => (
				<FormFood food={food} key={food.id_recipe} />
			))}
			<FormFood></FormFood> */}
      {editRecipe && <RecipeForm recipe={editRecipe} />}
    </div>
  );
};

export default EditFood;
