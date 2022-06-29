/** @format */

import { faEdit, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./FoodDetails.css";
import { getRecipeById } from "../../stores/recipe/recipesSlice";

const FoodDetails = () => {
	let history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();
	const { detailRecipe } = useSelector((state) => state.recipes);
	console.log(detailRecipe);
	console.log(+detailRecipe?.recipe?.id_recipe);
	console.log(id);
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(getRecipeById(id));
	}, [id, dispatch]);
	function goBack() {
		history.push("/explore");
		window.scrollTo(0, 9999);
	}
	return (
		<div className='food-details container scrollable'>
			{detailRecipe && detailRecipe?.recipe?.id_recipe == id && (
				<div className='row mb-5 my-5'>
					<div className='col-md-7 pr-md-4'>
						<h1 className='type-name my-3'>{detailRecipe.recipe.name}</h1>
						<h5 className='my-3'>
							🖋 Description: {detailRecipe.recipe.description}
						</h5>
						<h5 className='my-3'>
							👥 Servings: {detailRecipe.recipe.servings} &nbsp; &nbsp; &nbsp;
							&nbsp;⏳ Total time: {""}
							{detailRecipe.recipe.time}
						</h5>
						<h5></h5>
						<h4> 📜 Ingredients </h4>
						<ul>
							{detailRecipe.recipe.ingredients.map((ingredient) => (
								<li>
									{ingredient.amount} {ingredient.unit} {ingredient.ingredient}
								</li>
							))}
						</ul>
						<h4> 🍴 Directions </h4>
						<ul>
							{detailRecipe.recipe.directions.map((direction) => (
								<li>
									Step {direction.step}: {direction.direction}
								</li>
							))}
						</ul>
					</div>

					<div className='col-md-5 order-first order-md-last'>
						<img
							className='img-fluid mb-2'
							src={detailRecipe.recipe.image}
							alt='food-image'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default FoodDetails;
