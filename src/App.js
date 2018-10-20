import React, { Component } from 'react';
import UserList from './components/user-list';
import ActiveUser from './components/user-active';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<h1>Hey</h1>
				<UserList />
				<ActiveUser />
			</div>
		);
	}

}

export default App;
