/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import "./FoodItem.css";
const FoodItem = (props) => {
	const { id_recipe, image, name, time } = props.food.recipe;
	const { username } = props.food.creator;
	let history = useHistory();

	function detail() {
		history.push("food/" + id_recipe);
	}
	return (
		<div className='col-md-4 mb-4'>
			<div onClick={detail}>
				<div className='card text-center pointer'>
					<img src={image} alt='FoodItem' className='card-img-top' />

					<div className='card-body'>
						<h5 className='name-type'>{name}</h5>
						<p>
							<i>
								By <b>{username}</b>
							</i>
						</p>
						<p>⏱ {time} minutes</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodItem;
