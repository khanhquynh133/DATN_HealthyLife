/** @format */

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FORM_TYPE } from "../../core/constants";
import "./RecipeForm.css";
import { faClose, faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, updateRecipe } from "../../stores/recipe/recipesSlice";

const RecipeForm = (props) => {
	const dispatch = useDispatch();
	const { formType, recipe } = props;
	const defaultValues = recipe ? { ...recipe.recipe } : null;
	const { register, control, handleSubmit } = useForm({
		defaultValues,
	});
	console.log(recipe);

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

	const onSubmit = (data) => {
		const {
			name,
			description,
			time,
			servings,
			image,
			ingredients,
			directions,
			typeName,
		} = data;
		const type = {
			typeName,
		};
		const recipe = {
			name,
			description,
			time,
			servings,
			image,
		};
		console.log({ type, recipe, ingredients, directions });

		switch (formType) {
			case FORM_TYPE.CREATE:
				// dispatch create
				const create = (e) => {
					dispatch(createRecipe());
				};
				break;
			case FORM_TYPE.UPDATE:
				// dispatch update
				const update = (e) => {
					dispatch(updateRecipe());
				};
				break;
			default:
		}
	};

	return (
		<div className='recipe-form container scrollable'>
			<div className='row mb-5 my-2' Submit={handleSubmit(onSubmit)}>
				<h2 className='recipe-name my-3'>
					<b>EDIT RECIPE</b>
				</h2>
				<div className=' col-md-7 pr-md-4 recipe-name'>
					<h5 className='recipe-name '>Name recipe</h5>
					<input className='input-style me-md-5 mb-4' {...register("name")} />
					<select {...register("typeName")}>
						<option value='AirFryer'>AirFryer</option>
						<option value='Juice'>Juice</option>
						<option value='NutMilk'>NutMilk</option>
					</select>
					<h5 className='recipe-name my-2'>🖋 Description</h5>
					<textarea
						className='recipe-name my-1 mb-4 description-style'
						{...register("description")}
					/>
					<div className='row'>
						<h6 className='recipe-name col-md-3 '>👥 Servings</h6>
						<input className='col-md-1 me-md-4 ' {...register("servings")} />
						<h6 className='recipe-name col-md-3 '>⏳ Total time</h6>
						<input className='col-md-1 ' {...register("time")} />
					</div>
					<h5 className='recipe-name '>📜 Ingredients</h5>
					<ul>
						{ingFileds.map((item, index) => {
							return (
								<li key={item.id}>
									<input
										className='recipe-name mb-2 me-md-2 amount-style'
										{...register(`ingredients.${index}.amount`)}
									/>
									<input
										className='recipe-name mb-2 me-md-2 unit-style'
										{...register(`ingredients.${index}.unit`)}
									/>
									<input
										className='recipe-name mb-2 me-md-2 ingredient-style'
										{...register(`ingredients.${index}.ingredient`)}
									/>

									<button
										className='btn btn-danger rounded my-1'
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
								ingAppend();
							}}>
							<FontAwesomeIcon icon={faPlus} /> Append
						</button>
					</section>
				</div>

				<div className='col-md-5 recipe-name'>
					{/* <label htmlFor='image' className='form-label'>
						Images
					</label>
           */}
					<img
						className='img-fluid mb-2'
						src='https://bep360.net/wp-content/uploads/2021/05/uc-ga-nuong-noi-chien-khong-dau-rotated.jpg'
						alt='food-image'
					/>
					{/* <input {...register("image")} /> */}
					<h5 className='recipe-name'>🍴 Directions</h5>
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
								dirAppend();
							}}>
							<FontAwesomeIcon icon={faPlus} /> Append
						</button>
					</section>
				</div>
				<div>
					<Link className='btn btn-success rounded-pill my-3 me-md-2'>
						<FontAwesomeIcon icon={faSave} />
						<span> SAVE </span>
					</Link>
					<button className='btn btn-danger rounded-pill my-3'>
						<FontAwesomeIcon icon={faClose} />
						<span> Close </span>
					</button>
				</div>
				{/* <div className='form-label '>	<select {...register("typeName")}>
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
			</div>
		</div>
	);
};

export default RecipeForm;
