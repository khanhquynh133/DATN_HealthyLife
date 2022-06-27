/** @format */

import React, { useState } from "react";
import "./BlogItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleRight,
	faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const BlogItem = (props) => {
	const { image, title, description } = props.blog;
	const [descriptionCollapse, setDescriptionCollapse] = useState(false);

	const showMore = () => {
		setDescriptionCollapse(true);
	};

	const showLess = () => {
		setDescriptionCollapse(false);
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<img className='card-img-top' src={image} alt='blog-image' />
				<div className='card-body'>
					<div className='d-flex'>
						<div>
							<h5>
								<b>{title}</b>
							</h5>
							<p>
								{descriptionCollapse ? description : description.substr(0, 100)}
							</p>
							{descriptionCollapse ? (
								<span onClick={showLess} className='card-link collapse-btn'>
									{" "}
									Thu gọn{" "}
									<FontAwesomeIcon
										className='icon'
										icon={faArrowAltCircleLeft}
									/>
								</span>
							) : (
								<span onClick={showMore} className='card-link collapse-btn'>
									Xem thêm{" "}
									<FontAwesomeIcon
										className='icon'
										icon={faArrowAltCircleRight}
									/>
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
