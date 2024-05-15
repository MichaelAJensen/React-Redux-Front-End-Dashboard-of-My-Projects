import React from "react"
import Dashboard from "../views/Dashboard"
import { connect } from "react-redux"
import "../App.css"
import { handleInput, register, getUsersDB, checkAuth, login, toggleForm } from "../redux/actions"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount() {
        // console.log(localStorage.getItem('usersDB'));
        this.props.getUsersDB()
        this.props.checkAuth()
    }
    handleLogin(e) {
        e.preventDefault()
        this.props.login()
    }
    handleRegister(e) {
        e.preventDefault()
        this.props.register()
    }

    render() {
        return (
            < >

                {!this.props.isAuth && this.props.loginForm ? (
                    <div className="login">
                        <h1><marquee>Dashboard Projects 🚀 Dashboard Projects 🚀 Dashboard Projects 🚀 Dashboard Projects 🚀Dashboard Projects 🚀</marquee></h1>
                        <h1>Login to my Dashboard</h1>
                        <form onSubmit={this.handleLogin}>
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.username}
                                name='username'
                                type="text"
                                placeholder='username'
                                required
                            />
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.password}
                                name='password'
                                type="text"
                                placeholder='password'
                                required />
                            <br />
                            <br />
                            <button className='button' type="submit" ><span>🚀</span>
                            </button>

                        </form>
                        <h1 className="inputErrorMsg">{this.props.errorMessage}</h1>
                        <br />
                        <h1>To create a new account:
                            <br />
                            <button
                                className="createAcctBtn"
                                onClick={this.props.toggleForm}
                            >Create account</button></h1>

                    </div>
                ) : !this.props.loginForm && !this.props.isAuth ? <div>
                    <div>
                        <h1 className="h1reg">Register for my Dashboard</h1>
                        <form className="reg-form"
                            onSubmit={this.handleRegister}>
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.username}
                                name='username'
                                type="text"
                                placeholder='username'
                                required
                            />
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.firstName}
                                name='firstName'
                                type="text"
                                placeholder='first name'
                                required
                            />
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.lastName}
                                name='lastName'
                                type="text"
                                placeholder='last name'
                                required
                            />
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.email}
                                name='email'
                                type="text"
                                placeholder='email'
                                required
                            />
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.password}
                                name='password'
                                type="text"
                                placeholder='password'
                                required
                            />
                            <input
                                className="loginInputs"
                                onInput={this.props.handleInput}
                                value={this.props.confirmPassword}
                                name='confirmPassword'
                                type="text"
                                placeholder='confirm password'
                                required
                            />
                            <br />
                            <button className='button' type="submit" >🚀</button>
                        </form>
                        <h1 className="regErrorMsg">{this.props.errorMessage}</h1>
                    </div>
                </div> :

                    <div className="dashBoard">
                        <Dashboard />
                    </div>

                }
              
            </ >
        )
    }
}
const mapStateToProps = (state) => {

    return {
        isAuth: state.isAuth,
        username: state.username,
        loginForm: state.loginForm,
        errorMessage: state.errorMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login()),
        register: () => dispatch(register()),
        toggleForm: () => dispatch(toggleForm()),
        handleInput: (e) => dispatch(handleInput(e.target)),
        getUsersDB: () => dispatch(getUsersDB()),
        checkAuth: () => dispatch(checkAuth())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)