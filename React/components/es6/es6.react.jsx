import React from 'react/addons';

class Login extends React.Component {

	constructor() {
		super()
	}

	login(e) {
		e.preventDefault();
		var username = React.findDOMNode(this.refs.username).value.trim();
		var password = React.findDOMNode(this.refs.password).value.trim();

		alert(username + " - " + password);
	}

	render() {
		return (
			<div className="row">
				<h1>Login</h1>
			        <form role="form">
			        <div className="form-group">
			          	<label htmlFor="username">Username</label>
			          	<input type="text" className="form-control" id="username" ref="username" placeholder="Username" />
			        </div>
			        <div className="form-group">
			          	<label htmlFor="password">Password</label>
			          	<input type="password" className="form-control" id="password" ref="password" placeholder="Password" />
			        </div>
			        <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
			      </form>
			</div>
		);		
	}

}

React.render(<Login />, document.body);
