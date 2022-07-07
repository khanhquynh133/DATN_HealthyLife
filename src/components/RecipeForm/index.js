/** @format */

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FORM_TYPE } from "../../core/constants";
import "./RecipeForm.css";
import { faClose, faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, updateRecipe } from "../../stores/recipe/recipesSlice";
import { handleUpdateRecipeData } from "../../utilities/helper";
import { useEffect } from "react";
import { recipesType } from "../../stores/recipe/recipesType";

const RecipeForm = (props) => {
	const dispatch = useDispatch();
	const { formType, recipe } = props;
	const history = useHistory();
	const defaultValues = recipe ? { ...recipe.recipe } : null;
	const { register, control, handleSubmit } = useForm({
		defaultValues,
	});
	const { isSuccess, addRecipe } = useSelector((state) => state.recipes);
	console.log({ defaultValues });

	const {
		fields: ingFileds,
		append: ingAppend,
		remove: ingRemove,
	} = useFieldArray({
		control,
		name: "ingredients",
	});
	const {
		fields: dirFields,
		append: dirAppend,
		remove: dirRemove,
	} = useFieldArray({
		control,
		name: "directions",
	});

	const submitForm = (data) => {
		const { ingredients, directions, typeName, ...otherProps } = data;

		const submitData = {
			...otherProps,
			type: { typeName },
			ingredients,
			directions,
		};

		switch (formType) {
			case FORM_TYPE.CREATE:
				console.log(submitData);
				dispatch(createRecipe(submitData));
				break;
			case FORM_TYPE.UPDATE:
				const updatedData = handleUpdateRecipeData(recipe.recipe, submitData);
				console.log(updatedData);
				dispatch(updateRecipe(submitData));
				break;
			default:
		}
	};

	useEffect(() => {
		if (isSuccess === recipesType.CREATE_RECIPE) {
			history.push(`food/${addRecipe.id_recipe}`);
		}

		if (isSuccess === recipesType.UPDATE_RECIPE) {
			history.push(`/food/${defaultValues.id_recipe}`);
		}
	}, [isSuccess, addRecipe, history, defaultValues]);

	return (
		<div className='recipe-form container scrollable'>
			<form className='row mb-5 my-2' onSubmit={handleSubmit(submitForm)}>
				<div className=' col-md-7 pr-md-4 recipe-name'>
					<h5 className='recipe-name '>
						<b>Name recipe</b>
					</h5>
					<input className='input-style me-md-5 mb-4' {...register("name")} />
					<select
						{...register("typeName")}
						defaultValue={defaultValues?.type?.typeName || "AirFryer"}>
						<option value='AirFryer'>AirFryer</option>
						<option value='Juice'>Juice</option>
						<option value='NutMilk'>NutMilk</option>
					</select>
					<h5 className='recipe-name my-2'>
						<b>🖋 Description</b>
					</h5>
					<textarea
						className='recipe-name my-1 mb-4 description-style'
						{...register("description")}
					/>
					<div className='row'>
						<h6 className='recipe-name col-md-3 '>
							<b>👥 Servings</b>
						</h6>
						<input className='col-md-1 me-md-4 ' {...register("servings")} />
						<h6 className='recipe-name col-md-3 '>
							<b>⏳ Total time</b>
						</h6>
						<input className='col-md-1 ' {...register("time")} />
					</div>
					<h5 className='recipe-name '>
						<b>📜 Ingredients</b>
					</h5>
					<ul className='d-flex'>
						<li className='amount-style name-style'>
							<b>Amount</b>
						</li>
						<li className='unit-style name-style ms-3'>
							<b>Unit</b>
						</li>
						<li className='ingredient-style name-style ms-3'>
							<b>Ingredient</b>
						</li>
					</ul>
					<ul>
						{ingFileds.map((item, index) => {
							return (
								<li key={item.id}>
									<input
										className='recipe-name mb-2 me-md-3 amount-style'
										{...register(`ingredients.${index}.amount`)}
									/>
									<input
										className='recipe-name mb-2 me-md-3 unit-style'
										{...register(`ingredients.${index}.unit`)}
									/>
									<input
										className='recipe-name mb-2 me-md-2 ingredient-style'
										{...register(`ingredients.${index}.ingredient`)}
									/>

									<button
										className='btn btn-danger btn-sm rounded my-1'
										type='button'
										onClick={() => ingRemove(index)}>
										<FontAwesomeIcon icon={faClose} />
									</button>
								</li>
							);
						})}
					</ul>
					<section>
						<button
							className='btn btn-primary rounded my-2'
							type='button'
							onClick={() => {
								ingAppend({ ingredient: "", amount: "", unit: "" });
							}}>
							<FontAwesomeIcon icon={faPlus} /> Append
						</button>
					</section>
				</div>

				<div className='col-md-5 recipe-name'>
					{formType === FORM_TYPE.UPDATE && (
						<img
							className='img-fluid mb-2'
							src={defaultValues?.image}
							alt='food'
						/>
					)}
					<h5 className='recipe-name '>
						<b>🖼 Image URL</b>
					</h5>
					<input className='mb-5 image-input' {...register("image")} />
					<h5 className='recipe-name'>
						<b>🍴 Directions</b>
					</h5>
					<ul>
						{dirFields.map((item, index) => {
							return (
								<li key={item.id}>
									<textarea
										className='direction-style me-md-2 '
										{...register(`directions.${index}.direction`)}
									/>
									<button
										className='btn btn-danger btn-sm rounded mb-4'
										type='button'
										onClick={() => dirRemove(index)}>
										<FontAwesomeIcon icon={faClose} />
									</button>
								</li>
							);
						})}
					</ul>
					<section>
						<button
							className='btn btn-primary rounded'
							type='button'
							onClick={() => {
								dirAppend({ direction: "" });
							}}>
							<FontAwesomeIcon icon={faPlus} /> Append
						</button>
					</section>
				</div>
				<div>
					<button
						className='btn btn-danger rounded-pill my-3 me-md-2'
						type='submit'>
						<FontAwesomeIcon icon={faSave} />
						<span> Submit </span>
					</button>
				</div>
				{/* <div className='form-label '>	<select {...register("typeName")}>
=
						<option value='AirFryer'>AirFryer</option>
						<option value='Juice'>Juice</option>
						<option value='NutMilk'>NutMilk</option>
					</select></div> */}
				{/* <div className='form-control'>
					<label htmlFor='description' className='form-label'>
						Description
					</label>
					<textarea {...register("description")} />
				</div>
				<div className='form-control'>
					<label htmlFor='time' className='form-label'>
						Time
					</label>
					<input {...register("time")} />
				</div>
				<div className='form-control'>
					<label htmlFor='servings' className='form-label'>
						Servings
					</label>
					<input {...register("servings")} />
				</div>
				<div className='form-control'>
					<label htmlFor='image' className='form-label'>
						Images
					</label>
					<input {...register("image")} />
				</div>

				<div className='form-control'>
					<p>Ingredients</p>
					<ul>
						{ingFileds.map((item, index) => {
							return (
								<li key={item.id}>
									<input {...register(`ingredients.${index}.ingredient`)} />
									<input {...register(`ingredients.${index}.amount`)} />
									<input {...register(`ingredients.${index}.unit`)} />
									<button type='button' onClick={() => ingRemove(index)}>
										Delete
									</button>
								</li>
							);
						})}
					</ul>
					<section>
						<button
							type='button'
							onClick={() => {
								ingAppend();
							}}>
							append ingredient
						</button>
					</section>
				</div>

				<div className='form-control'>
					<p>Directions</p>
					<ul>
						{dirFields.map((item, index) => {
							return (
								<li key={item.id}>
									<input {...register(`directions.${index}.direction`)} />
									<button type='button' onClick={() => dirRemove(index)}>
										Delete
									</button>
								</li>
							);
						})}
					</ul>
					<section>
						<button
							type='button'
							onClick={() => {
								dirAppend();
							}}>
							append direction
						</button>
					</section>
				</div>
				<input type='submit' /> */}
			</form>
		</div>
	);
};

export default RecipeForm;
