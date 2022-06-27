/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Types from "./components/Types/Types";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import SearchResult from "./components/SearchResult/SearchResult";
import EditProfile from "./components/EditProfile/EditProfile";
import OwnRecipes from "./components/OwnRecipes/OwnRecipes";
import ListMembers from "./components/Admin/ListMembers";
import DetailMember from "./components/Admin/DetailMember";
import EditMember from "./components/Admin/EditMember";
function App() {
	return (
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>

		<Switch>
			<Route exact path='/'>
				<Header />
				<Banner />
				<Blog />
				<Footer />
			</Route>
			<Route path='/listmembers'>
				<Header />
				<ListMembers />
				<Footer />
			</Route>
			<Route path='/detailmember'>
				<Header />
				<DetailMember />
				<Footer />
			</Route>
			<Route path='/editmember'>
				<Header />
				<EditMember />
				<Footer />
			</Route>
			<Route path='/food/:id'>
				<Header />
				<FoodDetails />
				<Footer />
			</Route>
			<Route path='/explore'>
				<Header />
				<Types />
				<Footer />
			</Route>
			<Route path='/signin'>
				<SignIn />
			</Route>
			<Route path='/signup'>
				<SignUp />
			</Route>
			<Route path='/profile'>
				<Header />
				<Profile />
				<Footer />
			</Route>
			<Route path='/search'>
				<Header />
				<Banner />
				<SearchResult />
				<Footer />
			</Route>
			<Route path='/editprofile/:id'>
				<Header />
				<EditProfile />
				<Footer />
			</Route>
			<Route path='/ownrecipes'>
				<Header />
				<OwnRecipes />
				<Footer />
			</Route>
		</Switch>
	);
}

export default App;
