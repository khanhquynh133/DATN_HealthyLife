/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { login, reset, resetMsg } from "../../stores/auth/authSlice";
import "./Banner.css";

const Banner = () => {
	const [searchQuery, setSearchQuery] = useState(null);
	const getQuery = (event) => setSearchQuery(event.target.value);
	const [searchBy, setSearchBy] = useState("name");
	const getSearchBy = (event) => setSearchBy(event.target.value);
	const dispatch = useDispatch();
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		dispatch(resetMsg());
	}, [pathname, dispatch]);

	return (
		<section className='banner d-flex align-items-center text-center'>
			<div className='container'>
				<div className='search-box col-md-4 my-2 d-flex mx-auto'>
					<input
						type='text'
						id='query'
						onChange={getQuery}
						className='form-control'
						placeholder='Find recipe in here ...'
					/>
					<Link to={`/search?${searchBy}=${searchQuery}`}>
						<button
							onClick={() => window.scrollBy(0, 525)}
							className='btn btn-warning search-btn rounded-pill'>
							<b>Search</b>
						</button>
					</Link>
				</div>
				<input
					type='radio'
					id='name'
					name='type'
					value='name'
					defaultChecked='name'
					onChange={getSearchBy}
				/>
				<label htmlFor='name' className='textclr name-style me-md-4'>
					Name
				</label>
				<input
					type='radio'
					id='ingredient'
					name='type'
					value='ingredient'
					onChange={getSearchBy}
				/>
				<label htmlFor='ingredient' className='textclr name-style me-md-4'>
					Ingredient
				</label>

				<h1 className='slogan text-warning'>Choose clean recipes </h1>
				<h1 className='slogan text-warning'>
					to make your life more healthier
				</h1>
			</div>
		</section>
	);
};

export default Banner;
