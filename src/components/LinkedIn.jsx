import React from 'react'
import "../App.css"
import linkedpic from "../assets/data/blue-trademark-angle-area-linkedin-9518894a67f1bf2d25fce21b31279b6d.png"
import linkedInPic2 from "../assets/data/5bbc4e9c65a24-8fec274fdc652cc55481fb5afc7330da.png"


const LinkedIn = (props) => {
    return (
        <div className='myBioPage'>

            <h1>My future LinkedIn page</h1>
            <br />
            <img src={linkedInPic2}
                className='linkedinpic' />
        </div>
    )
}

export default LinkedIn