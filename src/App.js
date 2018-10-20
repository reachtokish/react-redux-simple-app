import React, { Component } from 'react';

class App extends Component {
	
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
								<input type="text" />
							</td>
						</tr>
						<tr>
							<th>
								Phone
							</th>
							<td>
								<input type="text" />
							</td>
						</tr>
						<tr>
							<th>&nbsp;</th>
							<td>
								<button type="button">Add User</button>
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

export default App;
