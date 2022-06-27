/** @format */

import React from "react";
import { Link } from "react-router-dom";

const FoodItem = (props) => {
	const { id, name, creator, time, img } = props.food;

	return (
		<div className='col-md-4 mb-4'>
			<Link to={"food/" + id}>
				<div className='card text-center'>
					<img src={img} alt='FoodItem' className='card-img-top' />

					<div className='card-body'>
						<h5>{name}</h5>
						<p>
							<i>
								By <b>{creator}</b>
							</i>
						</p>
						<p>⏱{time}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default FoodItem;
