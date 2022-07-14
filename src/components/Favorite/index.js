import React, { useEffect } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteRecipes } from '../../stores/recipe/recipesSlice';
import LoadingSpinner from '../LoadingSpinner';

const Favorite = () => {
  const { favRecipes, isLoading } = useSelector((state) => state.recipes);
  const { loginedUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginedUser?.id_user) {
      dispatch(getFavoriteRecipes());
    }
  }, [dispatch, loginedUser]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(favRecipes);

  return (
    <div>
      {favRecipes.length > 0 ? (
        <>
          {favRecipes.map((item) => (
            <FoodItem food={item} />
          ))}
        </>
      ) : (
        <>No fav</>
      )}
    </div>
  );
};

export default Favorite;
