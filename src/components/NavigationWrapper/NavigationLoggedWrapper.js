import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "recompose";
import React from "react";
import {urls} from "../../utils/urlUtils";

const ifLoggedGoToHome = (userAuth, Component, props) => {
    return userAuth != null
        ? <Redirect to={urls.home.path}/>
        : <Component {...props}/>
};


const NavigationLoggedWrapper = ({userAuth, component, ...otherProps}) => {
    return ifLoggedGoToHome(userAuth, component, otherProps);
};

const mapStateToProps = state => {
    return {userAuth: state.userAuth}
};

export default compose(withRouter, connect(mapStateToProps))(NavigationLoggedWrapper);

