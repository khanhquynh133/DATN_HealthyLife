/** @format */

import React from "react";
import "./Footer.css";
import whiteLogo from "../../images/carrotlogo.png";
import { Link } from "react-router-dom";
// import firebase from "firebase";
//import { useAuth } from "../SignUp/useAuth";
const Footer = () => {
	//const auth = useAuth();
	//const uid = auth.user == undefined ? "sddfd" : auth.user.uid;
	return (
		<footer className='bg-color py-1'>
			<div className='container'>
				{/* <div className='row footer-top py-2'>
					<div className='col-md-6 mb-1'>
						<img src={whiteLogo} alt='white-logo' />
					</div>
				</div> */}

				<div className='footer-bottom d-flex justify-content-start'>
					<div className='col-md-1 mb-1'>
						<img src={whiteLogo} alt='white-logo' />
					</div>
					<small className='text-secondary py-3'>
						Hoàng Ngọc Khánh Quỳnh - 18TCLC_DT3
						<br /> Đồ án tốt nghiệp (07/2022)
					</small>
					{/* <ul className='list-inline'>
						<li className='list-inline-item ml-1'>
							<Link to='/'>Home</Link>
						</li>
						<li className='list-inline-item py-3'>
							<Link to='/policy'>About us</Link>
						</li>
					</ul> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
