import React from 'react'
import "../App.css"
import gitPic from "../assets/data/github-gitlab-computer-icons-source-code-github-61293b712a0097f0f271fb57eeb481d8.png" 
import gitPic2 from "../assets/data/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d.png"


const GitHub = (props) => {
    return (
        <div className='myBioPage'> 
            <h1>My future GitHub page</h1>
            <img src={gitPic2} alt="gitHub pic" className='gitHubPic'/>
        </div>
    )
}

export default GitHub