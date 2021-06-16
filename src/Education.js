//Education.js

import React from 'react'

class Education extends React.Component{
render(){
    return(
    <div className='container'>
        {/* //educationOne */}
        <div className='accordian pt-4' id='edOne'>
                <div className='card'>
                    <h5 className='mb-0'>
                        <button 
                            className='btn btn-block' 
                            type='button' 
                            data-toggle='collapse' 
                            data-target='#collapseEdOne'
                            aria-controls='collapseEdOne'>
                                <div className='row'>
                                    <div className='col d-flex justify-content-start'>B.S. Business Administaration</div>
                                    <div className='col d-inline-flex justify-content-end'>GPA: 3.62</div>
                                </div>
                                <div className='row'>
                                    <div className='col d-flex justify-content-start'> Project Management</div>
                                </div>
                        </button>
                    </h5>
                    <div 
                        id='collapseEdOne' 
                        className='collapse' 
                        aria-labelledby='headingOne' 
                        data-parent='#edOne'>
                        <div className='card-body p-2'>
                            <div className='row'>
                                <div className='col'>California State University Chico</div>
                                <div className='col d-inline-flex justify-content-end'>Graduated May 2015</div>
                            </div>
                            Outstanding Achievement in Management
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Education