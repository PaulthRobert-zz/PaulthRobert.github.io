//Resume.js

import React from 'react'
import ResumeHeader from './ResumeHeader'
import WorkExperience from './WorkExperience'
import Education from './Education'


class Resume extends React.Component{
    render(){
        return(
            <div  className='bg-light'>
                <ResumeHeader/>
                {/* <BiExamples/> */}
                <WorkExperience/>
                <Education/>
            </div> 
        )
    }
}

export default Resume