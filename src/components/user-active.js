import React, {Component} from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeUser } from '../actions/index';

class ActiveUser extends Component {

    render() {
        return (
            <div>
                {this.props.user != null && <div>
                    <h2>Active User</h2>
                    First Name: {this.props.user.first}
                </div>}
                {this.props.user === null && <div>
                    <h2>Please select a user</h2>
                </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(ActiveUser);