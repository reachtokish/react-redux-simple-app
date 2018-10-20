import React, {Component} from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, doLikeUser } from '../actions/index';

class UserList extends Component {

    doLike(user) {
        // console.log(user);
        this.props.doLikeUser(user);
    }

    createListItem() {
        return this.props.users.map((user) => {
            return (
                <li 
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                    >
                    {user.first} - <button type="button" onClick={() => this.doLike(user)}>{user.liked === true ? "Dislike" : "Like" }</button>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                {this.createListItem()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser, doLikeUser: doLikeUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);