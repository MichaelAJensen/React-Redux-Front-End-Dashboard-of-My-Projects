import React from 'react'
import { connect } from "react-redux";
import { logout } from '../redux/actions';
import { Navbar } from '../components/Navbar';
import { Link, Outlet } from "react-router-dom"
import MyBio from './MyBio';

const Profile = (props) => {
    return (
        <div className="profile">
          
            <Link to="/mybio"
                className="linkMyBio">
                Read My Bio
            </Link>
        
            <div className="profileHeader"><h3>These are my reactProjects: </h3>
                <ul className='profileUls'>
                    <li>Drum Machine</li>
                    <li>Quote Generator</li>
                    <li>Movie Watch Dog</li>
                    <li>Magic Eight Ball</li>
                    <li>Pomodoro Clock</li>

                </ul>
                <button
                className='logoutBtn' onClick={props.logout}>Logout</button>
            </div>


            
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Profile);
