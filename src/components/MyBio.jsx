import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'


const MyBio = (props) => {
    return (
        <div className='myBioPage'>
            <h1>A little about me:</h1>
            <p className='bioptag'>I am a software engineer getting deeper into my career. To read more into my professional development please visit my links.</p>
            <br />
            <Link to="/linkedin"
                className="linkedInLink ">
                <p className='
fab fa-linkedin'></p>LinkedIn
            </Link>
            <br />
            <Link to="/github"
                className="gitHubLink">
                <p className='
fab fa-github'></p>GitHub
            </Link>
        </div>
    )
}

export default MyBio