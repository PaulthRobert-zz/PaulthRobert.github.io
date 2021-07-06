//Resume.js

import React from 'react'
import ResumeHeader from './ResumeHeader'
import WorkExperience from './WorkExperience'
import Education from './Education'
import BiExamples from './BiExamples'

class Resume extends React.Component{
    render(){
        return(
            <div>
                <BiExamples/>
                {/* <ResumeHeader/>
                <WorkExperience/>
                <Education/> */}
            </div>
        )
    }
}

export default Resume