/** @format */

import React, { useEffect, useState } from "react";
import allFoods from "../../fakeData/index";
import drink from "../../images/foodicon/juice4.jpg";

import nutmilk from "../../images/foodicon/nutmilk.png";
import airfryer from "../../images/foodicon/airfryer.png";
import FoodItem from "../FoodItem/FoodItem";
import "./Foods.css";

const Types = () => {
	// const [searchQuery, setSearchQuery] = useState(null);
	// const getQuery = (event) => setSearchQuery(event.target.value);
	const [foods, setFoods] = useState([]);
	const [type, setType] = useState("Air Fryer");
	useEffect(() => {
		setFoods(allFoods);
	}, []);
	const selectedType = foods.filter((food) => food.type === type);

	return (
		<section className='food-area my-4'>
			<div className='container'>
				<div>
					<h1 className='type-name text-center'>{type}</h1>
				</div>
				<nav>
					<ul className='nav justify-content-center mt-4'>
						<li className='nav-item' onClick={() => setType("Air Fryer")}>
							<span
								to='Air Fryer'
								className={
									type === "Air Fryer" ? "active nav-link" : "nav-link"
								}>
								<img
									src={airfryer}
									alt='foodIcon'
									width='55px'
									className='mr-2'
								/>
								Air Fryer
							</span>
						</li>
						<li className='nav-item' onClick={() => setType("Juice")}>
							<span
								to='Juice'
								className={type === "Juice" ? "active nav-link" : "nav-link"}>
								<img src={drink} alt='foodIcon' width='35px' className='mr-2' />
								Juice
							</span>
						</li>
						<li className='nav-item' onClick={() => setType("Nut Milk")}>
							<span
								to='Nut Milk'
								className={
									type === "Nut Milk" ? "active nav-link" : "nav-link"
								}>
								<img
									src={nutmilk}
									alt='foodIcon'
									width='35px'
									className='mr-2'
								/>
								Nut Milk
							</span>
						</li>
					</ul>
				</nav>

				<div className='row my-5'>
					{selectedType.map((food) => (
						<FoodItem food={food} key={food.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Types;
