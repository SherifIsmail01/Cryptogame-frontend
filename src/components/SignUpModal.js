import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';


class SignUpModal extends Component {
	constructor() {
		super();
		this.newUser = this.newUser.bind(this);
	}

	newUser(e) {
		e.preventDefault();
		console.log(this.refs.signup.value);
		var name = this.refs.signup.value
		fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ 
				name: name
			})
			}).then((res) => {
				return res.json()
			}).then((user) => {
				console.log(user)
				this.props.banana(user);
				this.props.myHistory.push("/users/" + user.id)
				// return (<Link  to={"/users/" + user.id}></Link>)
		});
	}

	render() {
		return (
	        <div className="modal fade show" style={{display: 'block'}}>
	          <div className="modal-dialog" role="document">
	            <div className="modal-content">
	              <div className="modal-header">
	                <h5 className="modal-title" id="SignUpModalLabel">Sign Up</h5>
	              </div>
	              <div className="modal-body">
	               		<form onSubmit= {this.newUser } >
				          <input ref="signup" type="text" placeholder="name" />
				          <input type="submit" />
				        </form>
	              </div>
	              <div className="modal-footer">
	                <button type="button" className="btn btn-lg btn-block" onClick={ this.props.close }>Close</button>
	              </div>
	            </div>
	          </div>
	        </div>
    	);
	}
}
export default SignUpModal
