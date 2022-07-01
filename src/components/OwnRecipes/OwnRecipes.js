/** @format */

import React, { useEffect } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './OwnRecipes.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesByUserId } from '../../stores/recipe/recipesSlice';
import LoadingSpinner from '../LoadingSpinner';

const OwnRecipes = () => {
  const dispatch = useDispatch();
  const { ownRecipes, isLoading } = useSelector((state) => state.recipes);
  const { loginedUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loginedUser?.id_user) {
      dispatch(getRecipesByUserId(loginedUser.id_user));
    }
  }, [dispatch, loginedUser]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="food-area my-4">
      {ownRecipes.length > 0 ? (
        <>
          <div className="container">
            <div className="row my-5">
              {ownRecipes.map((food, index) => (
                <FoodItem food={food} key={index} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default OwnRecipes;
