//BiExamples.js

import React from 'react'

import OrganUtil1 from './graphics/Examples/BI Organ Utilization/CS Organ Utilization_Utilization.jpg'
import OrganUtil2 from './graphics/Examples/BI Organ Utilization/CS Organ Utilization_Disposition.jpg'
import OrganUtil3 from './graphics/Examples/BI Organ Utilization/CS Organ Utilization_Detail.jpg'

class BiExamples extends React.Component{
    render(){
        return(
        <div className='container'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={OrganUtil1} className="d-block w-100"></img>
                </div>
                <div className="carousel-item">
                    <img src={OrganUtil2} className="d-block w-100"></img>
                </div>            
                <div className="carousel-item">
                    <img src={OrganUtil3} className="d-block w-100"></img>
                </div>   
            </div> 

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon btn-dark" aria-hidden="false"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon btn-dark" aria-hidden="false"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
    }
}

export default BiExamples