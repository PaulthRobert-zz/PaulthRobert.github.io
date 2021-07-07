//ResumeHeader.js

import React from 'react'

import gitHubIcon from './graphics/GitHub-Mark-32px.png'
import linkedInIcon from './graphics/LI-In-Bug.png'

class ResumeHeader extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='jumbotron p-4'>
                    <h1 className='display-6'>
                        <div className='row'>
                            <div className='col'>Paul Davis</div>
                        </div> 
                    </h1>
                    <hr></hr>
                    <h6>(530) 715-1826</h6>
                    <h6>paul.davis1826@gmail.com</h6>
                    <div className='row'>
                        <div className='col-sm-2 col-4'>
                            <div className='thumbnail'>
                                <a href='https://github.com/PaulthRobert/'>
                                    <img src={gitHubIcon}  className='img-thumbnail'/> 
                                </a>                           
                            </div>
                        </div> 
                        <div className='col-sm-2 col-4 d-flex justify-content-start' >
                            <div className='thumbnail'>
                                <a href='https://www.linkedin.com/in/paulrobertdavis/'>
                                    <img src={linkedInIcon} className='img-thumbnail'></img>
                                </a>                           
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeHeader