/** @format */

import React, { useEffect } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteRecipes } from "../../stores/recipe/recipesSlice";
import LoadingSpinner from "../LoadingSpinner";

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
					<div className='container'>
						<div className='row my-5'>
							{favRecipes.map((item) => (
								<FoodItem food={item} />
							))}
						</div>
					</div>
				</>
			) : (
				<>
					<h1 className='col-12 display-5 text-center name-style'>
						<b>No Favorite Recipe!</b>
					</h1>
					<h3 className='text-center name-style'>
						{" "}
						Explore and Find your own favorite recipes.
					</h3>
				</>
			)}
		</div>
	);
};

export default Favorite;
