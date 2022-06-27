/** @format */

import axios from "axios";
export class MemberService {
	static serverURL = " http://localhost:8000";
	static getAllMembers() {
		let dataURL = "${this.serverURL}/members";
		return axios.get(dataURL);
	}
}
