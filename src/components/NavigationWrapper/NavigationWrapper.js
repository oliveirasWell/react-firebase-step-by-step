import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "recompose";
import React from "react";
import {urls} from "../../utils/urlUtils";

const ifNotLoggedGoToLogin = (userAuth, Component, props) => {
    return userAuth != null
        ? <Component {...props}/>
        : <Redirect to={urls.login.path}/>
};

const NavigationWrapper = ({userAuth, component, ...otherProps}) => {
    return ifNotLoggedGoToLogin(userAuth, component, otherProps);
};

const mapStateToProps = state => {
    return {userAuth: state.userAuth}
};

export default compose(withRouter, connect(mapStateToProps))(NavigationWrapper);
