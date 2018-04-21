import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UploadPhoto from './UploadPhoto';
import DisplayResult from './DisplayResult';
import SignUp from './SignUp';
import Nav from './Nav';

import { userSignup, login, checkSession, signOut } from '../store/user'

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        const { photo, signOut, userSignup, login, user } = this.props;
        return (
            <div>
                <Route render={(route) => <Nav user={user} signOut={signOut} route={route} />} />
                <UploadPhoto />
                <DisplayResult photo={photo} />
                <Route exact path='/signup' render={(route) => <SignUp route={route} userSignup={userSignup} />} />
                <Route exact path='/login' render={(route) => <SignUp route={route} login={login} />} />
            </div>
        )
    }

}

const mapStateToProps = ({ photo, user }) => {
    return {
        photo, user
    }
}

const mapDispatch = (dispatch) => {
    return {
        userSignup: (credentials, history) => {
            dispatch(userSignup(credentials, history));
        },
        login: (credentials, history) => {
            dispatch(login(credentials, history));
        },
        checkSession: () => {
            dispatch(checkSession());
        },
        signOut: (history) => {
            dispatch(signOut(history));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatch)(Main));