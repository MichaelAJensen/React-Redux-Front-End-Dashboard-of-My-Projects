import React from "react";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = (props) => {
    return props.isAuth ? <Navigate to="/dashboard" />:<Outlet/>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps, null)(PublicRoute)