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
						<div>
							<h5 className='name-type fw-bold name-style'>{name}</h5>
						</div>
						<div>
							<h6 className='name-type  name-style'>
								<i>By {username}</i>
							</h6>
						</div>
						<div>
							<h6 className='name-type  name-style'>⏱ {time} minutes</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodItem;
