
import {
    HANDLE_INPUT, ADD_MOVIE, DELETE_MOVIE, DELETE_AGAIN, GET_USERS_DB, CHECK_AUTH, LOGIN, LOGOUT, REGISTER, TOGGLE_FORM, INCREASE_WORK_TIMER, DECREASE_WORK_TIMER, INCREASE_BREAK_TIMER, DECREASE_BREAK_TIMER, ADD_WORK_TIME, SUBTRACT_WORK_TIME, ADD_BREAK_TIME, SUBTRACT_BREAK_TIME, RESET,
    //for todos
    CLOSE_MODAL, HANDLE_EDIT, HANDLE_INPUTS, OPEN_MODAL, LETS_EDIT, ADD_TASK, DELETE_TASK
} from "./types"
import { v4 as uuid } from "uuid"

export const handleInput = (input) => {
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}
export const addMovie = () => {
    //let movie = {}
    return {
        type: ADD_MOVIE,
    }
}
export const deleteMovie = (movie) => {
    return {
        type: DELETE_MOVIE,
        payload: movie.id
    }
}
export const deleteAgain = (movie) => {
    return {
        type: DELETE_AGAIN,
        payload: movie.id
    }
}
// for login and reg
export const getUsersDB = () => {
    return {
        type: GET_USERS_DB
    }
}

export const checkAuth = () => {
    return {
        type: CHECK_AUTH
    }
}

export const login = () => {
    return {
        type: LOGIN
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const register = () => {

    return {
        type: REGISTER

    }
}
export const toggleForm = () => {
    return {
        type: TOGGLE_FORM
    }
}
//for pomodoro

export const increaseWorkTimer = () => {
    return {
        type: INCREASE_WORK_TIMER      
    }
}
export const decreaseWorkTimer = () =>{
    return {
        type: DECREASE_WORK_TIMER
    }
}
export const increaseBreakTimer = () => {
    return {
        type: INCREASE_BREAK_TIMER      
    }
}
export const decreaseBreakTimer = () =>{
    return {
        type: DECREASE_BREAK_TIMER
    }
}
export const addWorkTime = () => {

    return {
        type: ADD_WORK_TIME
    }
}
export const subtractWorkTime = () => {
    return {
        type: SUBTRACT_WORK_TIME
    }
}
export const addBreakTime = () => {
    return {
        type: ADD_BREAK_TIME
    }
}
export const subtractBreakTime = () => {
    return {
        type: SUBTRACT_BREAK_TIME
    }
}
export const reset = () => {    
    return {
        type: RESET
    }
}
//for todos
export const handleInputs = (input) => {
    return {
        type: HANDLE_INPUTS,
        payload: input
    }
}
export const addTask = () => {
    let todo = {}
    todo.id = uuid()
    return {
        type: ADD_TASK,
        payload: todo
    }
}
export const deleteTask = (todo) => {
    return {
        type: DELETE_TASK,
        payload: todo.id
    }
}
export const prepareToEdit = (todo) => {
    return {
        type: LETS_EDIT,
        payload: todo
    }
}
export const handleEdit = () => {
    return {
        type: HANDLE_EDIT
    }
}
export const handleOpenModal = () => {
    return {
        type: OPEN_MODAL
    }
}
export const handleCloseModal = () => {
    return {
        type: CLOSE_MODAL
    }
}
