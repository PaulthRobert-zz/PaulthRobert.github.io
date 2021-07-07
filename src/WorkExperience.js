//WorkExperience.js

import React from 'react'

import BiExamples from './BiExamples'
import vrlRequest from './graphics/Examples/SSRS_VRL Request/VRL Request.jpg'
import rooFlatten from './graphics/Examples/TSQL_ETL/RooFlattenETL.jpg'

class WorkExperience extends React.Component{
    render(){
        return(
            <div className='container'>
            
            {/* //jobOne */}
            <div className='accordian pb-1 ' id='jobOne'>
                <div className='accordian-item'>
                    <div className='card'>
                        <div className='mb-0'>
                            <button 
                                className='btn col-12' 
                                type='accordian-button' 
                                data-bs-toggle='collapse' 
                                data-bs-target='#collapseOne'
                                aria-expanded='true'
                                aria-controls='collapseOne'>
                                    <div className='row'>
                                        <div className='col d-flex justify-content-start'>DCI Donor Services</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>July 2020 - Present</div>
                                    </div>
                            </button>
                        </div>
                        <div 
                            id='collapseOne' 
                            className='collapse' 
                            aria-labelledby='headingOne' 
                            data-bs-parent='#jobOne'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col d-flex justify-content-start'>Database Report Writer</div>
                                    <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>Sacramento, CA</div>
                                </div>
                                <hr/>
                                <p>Design end to end BI Solutions used by business users to discover actionable insights</p>
                                <BiExamples/>
                                <p className='py-4'>Develop paginated SSRS reports for functional uses such as automating processes by prefilling data onto vendor defined forms from the electronic medical record system</p>
                                <div>
                                    <div>
                                        <img src={vrlRequest} className='d-block w-75 h-75'></img>
                                    </div>
                                </div>
                                <div>
                                    <p className='py-4'>Author TSQL ETL stored procedures to intrgrate extrernal data with multiple internal datasources to provide analytical potential previously unaccesible to the organization</p>
                                </div>
                                <div>
                                    <img src={rooFlatten} className='d-block w-100 h-100 py-4'></img>
                                </div>
                                <p><a href='https://dcids.org/'>DCIDS Donor Services Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* //jobTwo */}
            <div className='accordian pb-1' id='jobTwo'>
                <div className='accordian-item'>                
                    <div className='card'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn col-12' 
                                type='button' 
                                data-bs-toggle='collapse' 
                                data-bs-target='#collapseTwo'
                                aria-controls='collapseTwo'>
                                    <div className='row'>
                                        <div className='col d-flex justify-content-start'>Fifth Sun</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>July 2019 – July 2020</div>
                                    </div>
                            </button>
                        </h5>
                        <div id='collapseTwo' className='collapse' aria-labelledby='headingtwo' data-parent='#jobTwo'>
                            <div className='card-body p-2'>
                                <div className='row'>
                                    <div className='col'>IT Analyst</div>
                                    <div className='col d-flex justify-content-end'>Chico, CA </div>
                                </div>
                                <hr/>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>Optimized SQL queries embedded in automated PowerShell program to decrease run time under load from 15 minutes to 45 seconds.</li>
                                    <li className='list-group-item'>Developed SSRS reports for business users and optimized existing legacy reports. </li>
                                    <li className='list-group-item'>Supported high volume retail EDI document exchange and integrations (850, 855, 856, 810, 852, 864, 853/854) identifying and resolving data issues for both inbound and outbound documents while meeting SLAs with customers. </li>
                                    <li className='list-group-item'>Eradicated malicious phishing attack from all 600+ mailboxes using Exchange Online PowerShell Provided frontline support and service to a complex office and manufacturing environment with over 150 Windows PCs and 100 OSX devices, VOIP phone, printers, servers, O365 hybrid deployment. </li>
                                    <li className='list-group-item'>Developed proof of concept ETL for EDI 852 selling data using both SSIS and Java from JC Penny’s, Target, and Kohls into an inhouse database eliminating dependency on a third-party vendor.</li>
                                   </ul>
                                   <p className='py-4'><a href='https://fifthsun.com/'>Fifth Sun's Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* //jobThree */}
            <div className='accordian pb-1' id='jobThree'>
                <div className='accordian-item'>                
                    <div className='card'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn col-12' 
                                type='button' 
                                data-bs-toggle='collapse' 
                                data-bs-target='#collapseThree'
                                aria-controls='collapseThree'>
                                    <div className='row'>
                                        <div className='col col d-flex justify-content-start'>The Sun Valley Rice Company</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>October 2018 – July 2019</div>
                                    </div>
                            </button>
                        </h5>
                        <div id='collapseThree' className='collapse' aria-labelledby='headingThree' data-parent='#jobThree'>
                            <div className='card-body p-2'>
                                <div className='row'>
                                    <div className='col'>Business Systems Analyst</div>
                                    <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>Arbuckle, CA</div>
                                </div>
                                <hr/>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>Designed and developed over 40 ad-hoc SQL reports for executive team, managers, and end users </li>
                                    <li className='list-group-item'> Debugged technical issues with SSRS reports created by 3rd party consultants and implemented bug fixes </li>
                                    <li className='list-group-item'>Defined functional and technical requirements to integrate truck scales into Dynamics NAV ERP and performed unit, integration, and user acceptance testing to correct 18 critical defects before deployment </li>
                                    <li className='list-group-item'> Configured and deployed EDI documents (850, 855, 856, and 810) with multiple trading partners</li>
                                    <li className='list-group-item'>Wrote functional and technical documentation for multiple business and ERP process improvements </li>
                                    <li className='list-group-item'>Developed an ad-hoc report in Power BI to identify and quantify the negative impact of retaliatory tariffs for rice exports to the EU and presented my development process and findings to the NAV User Group</li>
                                </ul>
                                <p><a href='https://sunvalleyrice.com/'>The Sun Valley Rice Company Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //jobFour */}
            <div className='accordian pb-1' id='jobFour'>
                <div className='accordian-item'>                
                    <div className='card'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn col-12' 
                                type='button' 
                                data-bs-toggle='collapse' 
                                data-bs-target='#collapseFour'
                                aria-controls='collapseFour'>
                                    <div className='row'>
                                        <div className='col col d-flex justify-content-start'>Mary Ann’s Baking Company</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>March 2018 – October 2018</div>
                                    </div>
                            </button>
                        </h5>
                        <div id='collapseFour' className='collapse' aria-labelledby='headingFour' data-parent='#jobFour'>
                            <div className='card-body p-2'>
                                <div className='row'>
                                    <div className='col'>Systems Manager</div>
                                    <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>Sacramento, CA</div>
                                </div>
                                <hr/>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>Drove Dynamics NAV upgrade project (2009 R2 to 2017)</li>
                                    <li className='list-group-item'>Composed project plan to determine critical path and resource requirements</li>
                                    <li className='list-group-item'>Developed detailed test plans through user interviews and coached end users through effective testing</li>
                                    <li className='list-group-item'>Tested and analyzed Jet Report issues and designed modifications to resolve issues</li>
                                    <li className='list-group-item'>Managed project budget approved quotes, work orders, and invoices from Dynamics NAV partner</li>
                                    <li className='list-group-item'>Resolved issues by modifying custom report layouts using SQL Report Builder</li>
                                    <li className='list-group-item'>Managed technical implementation of RedZone Production System</li>
                                    <li className='list-group-item'>Developed an automated stored procedure in SQL Server to transform and export production schedule from Dynamics NAV into RedZone daily</li>
                                    <li className='list-group-item'>Created, and modified Tableau reports for distribution of manufacturing data from RedZone Delivered oversight of Managed Services Provider – weekly project management meeting to set organizational priorities for improving IT Infrastructure</li>
                                    <li className='list-group-item'>Analyzed existing production material requisition process and developed detailed process documentation through interactive discovery sessions with key staff for use in process re-engineering</li>
                                </ul>
                                <p><a href='https://maryannsbaking.com/'>Mary Ann’s Baking Company Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //jobFive */}
            <div className='accordian pb-1' id='jobFive'>
                <div className='accordian-item'>                
                    <div className='card'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn col-12' 
                                type='button' 
                                data-bs-toggle='collapse' 
                                data-bs-target='#collapseFive'
                                aria-controls='collapseFive'>
                                    <div className='row'>
                                        <div className='col col d-flex justify-content-start'>Rumiano Cheese Company</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>March 2017 – January 2018</div>
                                    </div>
                            </button>
                        </h5>
                        <div id='collapseFive' className='collapse' aria-labelledby='headingFive' data-parent='#jobFive'>
                            <div className='card-body p-2'>
                                <div className='row'>
                                    <div className='col'>ERP Project Manager</div>
                                    <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>Willows, CA </div>
                                </div>
                                <hr/>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>Guided planning and execution of Project Schedule and tasks to successfully implement Navision 2015 ERP</li>
                                    <li className='list-group-item'>Designed testing plans and facilitated testing for Key Users, including 133 test scenarios</li>
                                    <li className='list-group-item'>Conducted soft rollouts of Receiving, Shipping, and Production functions to provide real-world test scenarios </li>
                                    <li className='list-group-item'>Trained 9 warehouse employees on Shipping and Receiving procedures and more than 30 production warehouse employees on inventory transaction utilizing Symbol mobile computer barcode scanners</li>
                                    <li className='list-group-item'>Configured ERP integration for 6 packaging lines utilizing ceiling mounted workstations, Zebra label printers, and Toledo scales</li>
                                    <li className='list-group-item'>Coordinated the development of over 700 Production Bills of Material</li>
                                    <li className='list-group-item'>Coordinated count of initial inventory load of 1,500 pallets of inventory and approximately 600 SKUs</li>
                                    <li className='list-group-item'>Supported and trained inventory control team to maintain accurate perpetual inventory Refined ERP integration with BarTender using 16 label formats, designed 8 packaging labels to meet inventory control requirements and to conform to the unique requirements of 5 strategic customers</li>
                                </ul>
                                <p><a href='https://rumianocheese.com/'>Rumiano Cheese Company Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default WorkExperience