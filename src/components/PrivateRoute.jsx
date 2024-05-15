import React from "react";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


const PrivateRoute = (props) => {  
    return props.isAuth ? <Outlet/>:<Navigate to="/" />
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)