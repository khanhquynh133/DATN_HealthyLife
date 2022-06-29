/** @format */

import React, { useEffect, useState } from "react";
import allFoods from "../../fakeData/index";
import drink from "../../images/foodicon/juice4.jpg";

import nutmilk from "../../images/foodicon/nutmilk.png";
import airfryer from "../../images/foodicon/airfryer.png";
import FoodItem from "../FoodItem/FoodItem";
import "./OwnRecipes.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesByUserId } from "../../stores/recipe/recipesSlice";
import axios from "axios";
const OwnRecipes = () => {
	// const [searchQuery, setSearchQuery] = useState(null);
	// const getQuery = (event) => setSearchQuery(event.target.value);
	// let user = JSON.parse(localStorage.getItem("user-info"));
	// const [foods, setFoods] = useState([]);
	// const [creator, setType] = useState("Air Fryer");
	// const selectedType = foods.filter((food) => food.creator === user.email);

	const dispatch = useDispatch();
	const { ownRecipes } = useSelector((state) => state.recipes);
	const { loginedUser } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getRecipesByUserId(2));
		const headers = {
			Authorization: "Basic a2hhbmhxdXluaDEzM0BnbWFpbC5jb206YWJjQDEyMw==",
		};
		axios
			.get("https://healthy-life-server.azurewebsites.net/api/recipes/user/2", {
				headers,
			})
			.then((response) => console.log(response));
	}, []);
	// console.log(loginedUser);
	// console.log(ownRecipes);

	return (
		<section className='food-area my-4'>
			<div className='container'>
				{/* <div className='row my-5'>
					{selectedType.map((food) => (
						<FoodItem food={food} key={food.id} />
					))}
				</div> */}
			</div>
		</section>
	);
};

export default OwnRecipes;
