/** @format */

import React, { useEffect } from "react";
import "./SearchResult.css";
import { useParams, Link, useLocation } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipesByName } from "../../stores/recipe/recipesSlice";

const SearchResult = () => {
	const location = useLocation();
	const { search } = location;
	const name = search.substring(6);

	const { searchRecipe } = useSelector((state) => state.recipes);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(searchRecipesByName(name));
	}, [name, dispatch]);
	console.log(searchRecipe);

	return (
		<section className='food-area my-5'>
			<div className='container'>
				<h3 className='text-center search-res-title'>Search Result</h3>
				<div className='row my-5'>
					{searchRecipe.map((food) => (
						<FoodItem key={food.id_recipe} food={food}></FoodItem>
					))}
					{SearchResult.length === 0 && (
						<h1 className='col-12 display-5 text-center'>No food found!</h1>
					)}
				</div>
			</div>
		</section>
	);
};

export default SearchResult;
