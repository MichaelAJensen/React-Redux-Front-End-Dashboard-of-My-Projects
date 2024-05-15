import React from "react"
import Dashboard from "./views/Dashboard"
import { connect} from "react-redux"


import "./App.css"
import { handleInput, register, getUsersDB, checkAuth, login, toggleForm } from "./redux/actions"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"
// import Login from "./components/Login"
import Landing from "./views/Landing"
import Profile from "./components/Profile"
import QuoteGenerator from "./components/QuoteGenerator"
import DrumMachine from "../src/components/DrumMachine"
import Navbar from "./components/Navbar"
import Pomodoro from "./components/Pomodoro"
import Todo from "./components/Todo"
import MagicEightBall from "./components/MagicEightBall"
import MyBio from "./components/MyBio"
import LinkedIn from "./components/LinkedIn"
import GitHub from "./components/GitHub"
// import Form from "./components/Form"
// import Card from "./components/Card"
// import Watched from "./components/Watched"


class App extends React.Component {
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
            <div className='app'>
               
                <Routes>
                    <Route elememt={<PublicRoute />}>
                        <Route path="/" element={<Landing />} />
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route element=
                            {<Navbar />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/quotegenerator" element={<QuoteGenerator />}></Route>
                        <Route path="/drummachine" element={<DrumMachine />}></Route>
                        <Route path="/pomodoro" element={<Pomodoro />}></Route>
                        <Route path="/todo" element={<Todo />}></Route>
                        <Route path="/magiceightball" element={<MagicEightBall />}></Route>
                        <Route path="/mybio"element={<MyBio />}></Route>
                        <Route path="/linkedin"element={<LinkedIn />}></Route>
                        <Route path="/github"element={<GitHub />}></Route>

                    </Route>
                </Routes>

            </div >
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


export default connect(mapStateToProps, mapDispatchToProps)(App)

