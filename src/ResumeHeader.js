//ResumeHeader.js

import React from 'react'

class ResumeHeader extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-6'>Paul Davis</h1>
                    <hr className='my-1'></hr>
                    <h6>(530) 715-1826</h6>
                    <h6>paul.davis1826@gmail.com</h6>
                </div>
            </div>
        )
    }
}

export default ResumeHeader