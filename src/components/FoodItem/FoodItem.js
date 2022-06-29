/** @format */

import React from "react";
import { Link } from "react-router-dom";

const FoodItem = (props) => {
	const { id_recipe, image, name, time } = props.food.recipe;
	const { username } = props.food.creator;
	return (
		<div className='col-md-4 mb-4'>
			<Link to={"food/" + id_recipe}>
				<div className='card text-center'>
					<img src={image} alt='FoodItem' className='card-img-top' />

					<div className='card-body'>
						<h5>{name}</h5>
						<p>
							<i>
								By <b>{username}</b>
							</i>
						</p>
						<p>⏱ {time}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default FoodItem;
