import {
    HANDLE_INPUT, ADD_MOVIE, DELETE_MOVIE, DELETE_AGAIN, LOGIN, REGISTER, GET_USERS_DB, CHECK_AUTH, LOGOUT, TOGGLE_FORM, INCREASE_WORK_TIMER, DECREASE_WORK_TIMER, INCREASE_BREAK_TIMER, DECREASE_BREAK_TIMER, ADD_WORK_TIME, SUBTRACT_WORK_TIME, ADD_BREAK_TIME, SUBTRACT_BREAK_TIME, RESET,
    //fot todos
    ADD_TASK, DELETE_TASK, CLOSE_MODAL, HANDLE_EDIT, HANDLE_INPUTS, OPEN_MODAL, LETS_EDIT
} from "./types"
import { v4 as uuid } from "uuid"

let initialState = {
    movies: [],
    alreadyWatched: [],
    title: "",
    director: "",
    genre: "",
    // for login and reg
    //auth
    users: [],
    curentUser: null,
    isAuth: false,
    loginForm: true,
    errorMessage: null,

    //for login and reg
    //inputs
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",

    // for pomodoro
    adjustWork: 1500,
    adjustBreak: 300,
    work: 5,
    break: 3,
    isWorking: true,
    running: false,
    task: "",
    editTask: "",
    editId: "",
    todos: [],
    isEdit: false,
    modalOpen: false


}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case HANDLE_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case ADD_MOVIE:
            let movie = {
                title: state.title,
                director: state.director,
                genre: state.genre,
                id: uuid()
            }
            return {
                ...state,
                movies: [movie, ...state.movies],
                title: "",
                director: "",
                genre: ""
            }
        case DELETE_MOVIE:
            let deletedMovie = state.movies.filter(movie => movie.id !== action.payload)
            let theChosenOne = state.movies.filter(movie => movie.id === action.payload)[0]
            return {
                ...state,
                movies: deletedMovie,
                alreadyWatched: [theChosenOne, ...state.alreadyWatched]
            }

        case DELETE_AGAIN:
            let lastDeletedMovie = state.alreadyWatched.filter(movie => movie.id !== action.payload)
            return {
                ...state,
                alreadyWatched: lastDeletedMovie
            }
        //for login and reg
        case LOGIN:
            let user = state.users.find(user => user.username === state.username && user.password === state.password)
            if (user) sessionStorage.setItem('currentUser', JSON.stringify(user))
            return {
                ...state,
                currentUser: user ? user : null,
                isAuth: user ? true : false,
                errorMessage: !user ? 'Incorrect email or password!' : '',
                username: "",
                password: "",
            }

        case REGISTER:
            let newUser = {}
            newUser.username = state.username
            newUser.firstName = state.firstName
            newUser.lastName = state.lastName
            newUser.email = state.email
            newUser.password = state.password
            newUser.confirmPassword = state.confirmPassword

            // if statements to check if username or email is already taken can be added here 
            let badPassword = newUser.password !== newUser.confirmPassword
            let check = state.users.find(user => user.username === state.username || user.email === state.email)
            if (check) {
                return {
                    ...state,
                    errorMessage: "Username or email already taken. Please try a new combination",
                    username: "",
                    email: "",
                    isAuth: false
                }
            }
            else if (badPassword) {
                return {
                    ...state,
                    errorMessage: "Please confirm correct password!",
                    confirmPassword: "",
                    isAuth: false
                }
            }
            else {
                sessionStorage.setItem('currentUser', JSON.stringify(newUser))
                return {
                    ...state,
                    isAuth: true,
                    users: [newUser, ...state.users],
                    currentUser: newUser
                }
            }

        case GET_USERS_DB:
            let users = sessionStorage.getItem('usersDB') ? JSON.parse(sessionStorage.getItem('usersDB')) : []          
            return {
                ...state,
                usersDB: users
            }
        case CHECK_AUTH:
            let foundUser = sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : null
            return {
                ...state,
                isAuth: foundUser ? true : false,
                currentUser: foundUser
            }
        case LOGOUT:
            sessionStorage.setItem('currentUser', JSON.stringify(null))
            return {
                ...state,
                isAuth: false,
                currentUser: null,
                loginForm: true,
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: ""
            }
        case TOGGLE_FORM:
            return {
                ...state,
                isAuth: false,
                loginForm: false,
                errorMessage: ""
            }
        // for pomodoro
        case INCREASE_WORK_TIMER:
            return {
                ...state,
                work: state.work + 60
            }
        case DECREASE_WORK_TIMER:
            return {
                ...state,
                work: state.work - 1,
                isWorking: state.work - 1 > 0
            }
        case INCREASE_BREAK_TIMER:
            return {
                ...state,
                break: state.break + 60
            }
        case DECREASE_BREAK_TIMER:
            return {
                ...state,
                break: state.break - 1
            }
        case ADD_WORK_TIME:
            return {
                ...state,
                adjustWork: state.adjustWork + 60,
                work: state.work + 60
            }
        case SUBTRACT_WORK_TIME:
            return {
                ...state,
                adjustWork: state.adjustWork - 60,
                work: state.work - 60
            }
        case ADD_BREAK_TIME:
            return {
                ...state,
                adjustBreak: state.adjustBreak + 60,
                break: state.break + 60
            }
        case SUBTRACT_BREAK_TIME:
            return {
                ...state,
                adjustBreak: state.adjustBreak - 60,
                break: state.break - 60
            }
        case RESET:
            return {
                ...state,
                work: state.adjustWork,
                break: state.adjustBreak
            }
        case HANDLE_INPUTS:
            let { names, values } = action.payload
            return {
                ...state,
                [names]: values
            }
        case ADD_TASK:
            action.payload.task = state.task
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                task: "",
                modalOpen: false
            }
        case DELETE_TASK:
            let allTheOthers = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: allTheOthers
            }
        case LETS_EDIT:
            return {
                ...state,
                isEdit: true,
                editId: action.payload.id,
                editTask: action.payload.task
            }
        case HANDLE_EDIT:
            let youvechanged = state.todos.map(todo => {
                if (todo.id === state.editId) {
                    todo.task = state.editTask
                }
                return todo
            })
            return {
                ...state,
                todos: youvechanged,
                isEdit: false,
                editId: "",
                editTask: ""
            }
        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false
            }

        default:
            return state
    }
}

export default rootReducer
