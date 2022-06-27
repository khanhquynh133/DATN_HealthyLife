/** @format */

import { faEdit, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import allFoods from "../../fakeData/index";
import "./FoodDetails.css";

const FoodDetails = () => {
	// let user = JSON.parse(localStorage.getItem("user-info"));
	let history = useHistory();

	const { id } = useParams();
	// const currentFood = allFoods.find((food) => food.id === id);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	// function goBack() {
	// 	history.push("/explore");
	// 	window.scrollTo(0, 9999);
	// }

	return (
		<div className='food-details container scrollable'>
			{/* <div className='row mb-5 my-5'>
				<div className='col-md-7 pr-md-4'>
					<h1 className='type-name my-3'>{currentFood.name}</h1>
					<h5 className='my-3'>
						👥 Servings: {currentFood.servings} &nbsp; &nbsp; &nbsp; &nbsp;⏳
						Total time: {""}
						{currentFood.time}
					</h5>
					<h5></h5>
					<h4> 📜 Ingredients </h4>
					<ul>
						{currentFood.ingredients.map((ingredient) => (
							<li>
								{ingredient.amount} {ingredient.unit} {ingredient.name}
							</li>
						))}
					</ul>
					<h4> 🍴 Directions </h4>
					<ul>
						{currentFood.directions.map((direction) => (
							<li>
								Step {direction.step}: {direction.direction}
							</li>
						))}
					</ul>
				</div>

				<div className='col-md-5 order-first order-md-last'>
					<img
						className='img-fluid mb-2'
						src={currentFood.img}
						alt='food-image'
					/>
				</div>
			</div>
			<div className='text-center'>
				{currentFood.creator === user.email ? (
					<div>
						<button className='btn btn-danger rounded-pill my-3 me-md-2'>
							<FontAwesomeIcon icon={faEdit} />
							<span> Edit </span>
						</button>
						<button
							onClick={goBack}
							className='btn btn-danger rounded-pill my-3'>
							<FontAwesomeIcon icon={faWindowClose} />
							<span> Close </span>
						</button>
					</div>
				) : (
					<div onClick={goBack}>
						<button className='btn btn-danger rounded-pill my-3'>
							<FontAwesomeIcon icon={faWindowClose} />
							<span> Close </span>
						</button>
					</div>
				)}
			</div> */}
		</div>
	);
};

export default FoodDetails;
