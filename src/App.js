import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser, likeUser, filterUser } from "./action";
import { bindActionCreators } from "redux";

class App extends Component {

	constructor() {
		super();
		this.state = {
			name: "",
			phone: ""
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit() {
		this.props.addUser(this.state);
	}

	onDoLike(user) {
		this.props.likeUser(user);
	}
	
	render() {
		return (
			<div className="App">
				<h2>Add User</h2>
				<table>
					<tbody>
						<tr>
							<th>
								Name
							</th>
							<td>
								<input type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} name="name" />
							</td>
						</tr>
						<tr>
							<th>
								Phone
							</th>
							<td>
								<input type="text" value={this.state.phone} onChange={(e) => this.handleChange(e)} name="phone" />
							</td>
						</tr>
						<tr>
							<th>&nbsp;</th>
							<td>
								<button type="button" onClick={() => this.handleSubmit()}>Add User</button>
							</td>
						</tr>
					</tbody>
				</table>
				<hr />
				<h2>User List</h2>
				<h4>Filter By: Show All</h4>
				<button type="button" onClick={() => this.props.filterUser("SHOW_ALL")}>Show All</button>&nbsp;
				<button type="button" onClick={() => this.props.filterUser("LIKED")}>Liked</button>&nbsp;
				<button type="button" onClick={() => this.props.filterUser("DISLIKED")}>Disliked</button>
				<br /><br />
				<table cellSpacing="0" cellPadding="5" border="1">
					<tbody>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Phone</th>
							<th>Liked</th>
							<th>Action</th>
						</tr>
						{this.props.users.map((elem, index) => (
							<tr key={index}>
								<td>{elem.id}</td>
								<td>{elem.name}</td>
								<td>{elem.phone}</td>
								<td>{elem.liked === true ? "Yes" : "No" }</td>
								<td><button type="button" onClick={() => this.onDoLike(elem)}>{elem.liked === true ? "Dislike" : "Like" }</button></td>
							</tr>
						))}
						{this.props.users.length <= 0 && <tr>
							<td colSpan="5" align="center">No Result</td>
						</tr>}
					</tbody>
				</table>
			</div>
		);
	}

}

const filterUserByLike = (users, filterType) => {
	switch (filterType) {
		case "SHOW_ALL":
			return users;
		case "LIKED":
			return users.filter(elm => {
				return elm.liked === true
			});
		case "DISLIKED":
			return users.filter(elm => {
				return elm.liked === false
			});
		default:
			throw new Error("Unknown Filter: " + filterType);
	}
}

const mapStateToProps = state => {
	return { 
		users: filterUserByLike(state.users, state.filterUser),
		filter: state.filterUser
	};
};

const mapDispatchToProps = (dispatch) => { 
	return bindActionCreators({
		addUser: addUser,
		likeUser: likeUser,
		filterUser: filterUser
	}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
