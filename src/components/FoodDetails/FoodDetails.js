/** @format */

import {
	faClose,
	faEdit,
	faEraser,
	faHeartCircleMinus,
	faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./FoodDetails.css";
import {
	addFavoriteRecipe,
	deleteRecipe,
	getRecipeById,
	publishRecipe,
	removeFavoriteRecipe,
	unpublishRecipe,
} from "../../stores/recipe/recipesSlice";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { ROLE } from "../../core/constants";
import Toggle from "react-toggle";

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

	const handleDelete = () => {
		dispatch(deleteRecipe(id));
		if (loginedUser?.roles[0].role === ROLE.ROLE_ADMIN) {
			history.push("/explore");
		} else {
			history.push("/ownrecipes");
		}
	};

	const handleFav = () => {
		if (detailRecipe?.favorite) {
			dispatch(removeFavoriteRecipe({ id_recipe: +id }));
		} else {
			dispatch(addFavoriteRecipe({ id_recipe: +id }));
		}
	};

	const handlePublic = () => {
		if (detailRecipe?.recipe.isPublic) {
			dispatch(unpublishRecipe(+id));
		} else {
			dispatch(publishRecipe(+id));
		}
	};

	console.log(detailRecipe);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className='food-details container scrollable'>
			{detailRecipe && detailRecipe?.recipe?.id_recipe == id && (
				<div className='row mb-5 my-5'>
					<div className='col-md-7 pr-md-4'>
						<h1 className='type-name my-3'>{detailRecipe.recipe.name}</h1>
						<h5 className='name-style my-3'>
							🖋 Description: {detailRecipe.recipe.description}
						</h5>
						<h5 className='name-style my-3'>
							👥 Servings: {detailRecipe.recipe.servings} &nbsp; &nbsp; &nbsp;
							&nbsp;⏳ Total time: {""}
							{detailRecipe.recipe.time} minutes
						</h5>
						<h4 className='name-style my-3'> 📜 Ingredients </h4>
						<ul>
							{detailRecipe.recipe.ingredients.map((ingredient, index) => (
								<li key={index} className='name-style my-3'>
									{ingredient.amount} {ingredient.unit} {ingredient.ingredient}
								</li>
							))}
						</ul>
						<h4 className='name-style my-3'> 🍴 Directions </h4>
						<ul>
							{detailRecipe.recipe.directions.map((direction, index) => (
								<li key={index} className='name-style my-3'>
									Step {direction.step}: {direction.direction}
								</li>
							))}
						</ul>
					</div>

					<div className='col-md-5 '>
						<img
							className='img-fluid mb-2'
							src={detailRecipe.recipe.image}
							alt='food'
						/>
					</div>
					<div className='action'>
						{detailRecipe?.creator?.id_user === loginedUser?.id_user ||
						loginedUser?.roles[0]?.role === ROLE.ROLE_ADMIN ? (
							<>
								<Link
									to={`/editfood/${id}`}
									className='btn btn-danger rounded-pill my-3 me-md-2 name-type'>
									<FontAwesomeIcon icon={faEdit} />
									<span> Edit </span>
								</Link>
								<button
									className='btn btn-danger rounded-pill my-3 me-md-2 name-type'
									onClick={handleDelete}>
									<FontAwesomeIcon icon={faEraser} />
									<span> Delete </span>
								</button>
							</>
						) : (
							""
						)}
						{loginedUser?.roles[0]?.role === ROLE.ROLE_USER && (
							<>
								<button
									className='btn btn-danger rounded-pill my-3 me-md-2 name-type'
									onClick={handleFav}>
									{detailRecipe?.favorite ? (
										<>
											<FontAwesomeIcon icon={faHeartCircleMinus} />
											<span> Unfavorite </span>
										</>
									) : (
										<>
											<FontAwesomeIcon icon={faHeartCirclePlus} />
											<span> Favorite </span>
										</>
									)}
								</button>
							</>
						)}

						{detailRecipe?.creator?.id_user === loginedUser?.id_user && (
							<label className='public'>
								<Toggle
									defaultChecked={detailRecipe?.recipe.isPublic}
									className='custom-classname'
									onChange={handlePublic}
								/>
								<span>Public</span>
							</label>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default FoodDetails;
