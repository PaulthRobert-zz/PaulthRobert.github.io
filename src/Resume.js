//Resume.js

import React from 'react'
import ResumeHeader from './ResumeHeader'
import ResumeBody from './ResumeBody'

class Resume extends React.Component{
    render(){
        return(
            <div>
                <ResumeHeader/>
                <ResumeBody/>
            </div>
        )
    }
}

export default Resume