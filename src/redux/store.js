import { legacy_createStore as createStore}  from "redux";
import rootReducer from "./rootReducer"

const store = createStore(rootReducer)

// the subscibe function fires whenever anything in state changes
store.subscribe(()=> {
    // console.log(store.getState())
    let users = store.getState().users
    localStorage.setItem('usersDB', JSON.stringify(users)) // store the array of users in localStorage
})

export default store