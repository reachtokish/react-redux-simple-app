import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser } from "./action";

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
		console.log(this.props);
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
				<table cellSpacing="0" cellPadding="5" border="1">
					<tbody>
						<tr>
							<th>Name</th>
							<th>Phone</th>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

}

const mapStateToProps = state => {
	return { users: state.users };
};

const mapDispatchToProps = (dispatch) => { 
	return bindActionCreators({
		addUser: addUser
	}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
