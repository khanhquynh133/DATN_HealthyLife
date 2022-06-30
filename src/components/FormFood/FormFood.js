/** @format */

import { faClose, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./EditFood.css";
import { getRecipeById } from "../../stores/recipe/recipesSlice";
import { Link } from "react-router-dom";

const FormFood = (props) => {
	const { id_recipe, image, name, time } = props.food.recipe;
	let history = useHistory();
	function goBack() {
		history.push("/");
		window.scrollTo(0, 9999);
	}
	return (
		<div className='food-details container scrollable'>
			{/* {editRecipe && editRecipe?.recipe?.id_recipe == id && (

			)} */}
			<div className='row mb-5 my-2'>
				<h2 className='recipe-name my-3'>EDIT RECIPE</h2>
				<div className='col-md-7 pr-md-4'>
					<h5 className='recipe-name '>Name recipe</h5>
					<input className='recipe-name my-1'></input>
					<select class='form-select my-1' aria-label='Default select example'>
						<option selected>Select Type</option>
						<option value='1'>AirFryer</option>
						<option value='2'>Juice</option>
						<option value='3'>NutMilk</option>
					</select>
					<h5 className='recipe-name '>🖋 Description</h5>
					<textarea className='recipe-name my-1 description-style'></textarea>

					<h5 className='recipe-name '>👥 Servings</h5>
					<input className='recipe-name my-1'></input>
					<h5 className='recipe-name '>⏳ Total time</h5>
					<input className='recipe-name my-1'></input>
					<h5 className='recipe-name '>📜 Ingredients</h5>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>
					<div>
						<input className='recipe-name my-1 me-md-2 amount-style '></input>
						<input className='recipe-name my-1 me-md-2 unit-style'></input>
						<input className='recipe-name my-1 me-md-2 ingredient-styles'></input>
					</div>

					{/* <ul>
							{editRecipe.recipe.ingredients.map((ingredient) => (
								<li>
									{ingredient.amount} {ingredient.unit} {ingredient.ingredient}
								</li>
							))}
						</ul> */}
					{/* <ul>
							{editRecipe.recipe.directions.map((direction) => (
								<li>
									Step {direction.step}: {direction.direction}
								</li>
							))}
						</ul> */}
				</div>

				<div className='col-md-5 '>
					<img
						className='img-fluid mb-2'
						src='https://bep360.net/wp-content/uploads/2021/05/uc-ga-nuong-noi-chien-khong-dau-rotated.jpg'
						alt='food-image'
					/>
					<h5 className='recipe-name'>🍴 Directions</h5>
					<div>
						<input className='recipe-name mb-1 me-md-2 amount-style '></input>
						<textarea className='recipe-name mb-1 '></textarea>
					</div>
				</div>
				<div>
					<Link className='btn btn-danger rounded-pill my-3 me-md-2'>
						<FontAwesomeIcon icon={faSave} />
						<span> SAVE </span>
					</Link>
					<button className='btn btn-danger rounded-pill my-3' onClick={goBack}>
						<FontAwesomeIcon icon={faClose} />
						<span> Close </span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FormFood;
