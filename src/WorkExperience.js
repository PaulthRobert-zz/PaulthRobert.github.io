//WorkExperience.js

import React from 'react'

class WorkExperience extends React.Component{
    render(){
        return(
            <div className='container'>
            
            {/* //jobOne */}
            <div className='accordian pb-1' id='jobOne'>
                <div className='card'>
                    <h5 className='mb-0'>
                        <button 
                            className='btn btn-block' 
                            type='button' 
                            data-toggle='collapse' 
                            data-target='#collapseOne'
                            aria-controls='collapseOne'>
                                <div className='row'>
                                    <div className='col-8 col-sm-6 d-flex justify-content-start'>Database Report Writer</div>
                                    <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>July 2020 - Present</div>
                                </div>
                        </button>
                    </h5>
                    <div 
                        id='collapseOne' 
                        className='collapse' 
                        aria-labelledby='headingOne' 
                        data-parent='#jobOne'>
                        <div className='card-body p-2'>
                            <div className='row'>
                                <div className='col'>DCI Donor Services</div>
                                <div className='col d-inline-flex justify-content-end'>Sacramento, CA</div>
                            </div>
                            Tried desperately to survive yet another icky workplace . . .  😫
                        </div>
                    </div>
                </div>
            </div>
            
            {/* //jobTwo */}
            <div className='accordian pb-1' id='jobTwo'>
                <div className='card'>
                    <h5 className='mb-0'>
                        <button 
                            className='btn btn-block' 
                            type='button' 
                            data-toggle='collapse' 
                            data-target='#collapseTwo'
                            aria-controls='collapseTwo'>
                                <div className='row'>
                                    <div className='col col d-flex justify-content-start'>IT Analyst</div>
                                    <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>July 2019 – July 2020</div>
                                </div>
                        </button>
                    </h5>
                    <div id='collapseTwo' className='collapse' aria-labelledby='headingtwo' data-parent='#jobTwo'>
                        <div className='card-body p-2'>
                            <div className='row'>
                                <div className='col'>Fifth Sun</div>
                                <div className='col d-flex justify-content-end'>Chico, CA </div>
                            </div>
                            Optimized SQL queries embedded in automated PowerShell to decrease run time from 15 minutes to 45 seconds. Developed SSRS reports for business users and optimized existing legacy reports. Supported high volume retail EDI document exchange and integrations (850, 855, 856, 810, 852, 864, 853/854) identifying and resolving data issues for both inbound and outbound documents while meeting SLAs with customers. Eradicated malicious phishing attack from all 600+ mailboxes using Exchange Online PowerShell Provided frontline support and service to a complex office and manufacturing environment with over 150 Windows PCs and 100 OSX devices, VOIP phone, printers, servers, O365 hybrid deployment. Developed proof of concept for processing retail 852 selling data with both SSIS and Java from JC Penny’s, Target, and Kohls into an inhouse database eliminating dependency on a third-party vendor.
                        </div>
                    </div>
                </div>
            </div>
        
            {/* //jobThree */}
            <div className='accordian pb-1' id='jobThree'>
                    <div className='card'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn btn-block' 
                                type='button' 
                                data-toggle='collapse' 
                                data-target='#collapseThree'
                                aria-controls='collapseThree'>
                                    <div className='row'>
                                        <div className='col col d-flex justify-content-start'>Business Systems Analyst</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>October 2018 – July 2019</div>
                                    </div>
                            </button>
                        </h5>
                        <div id='collapseThree' className='collapse' aria-labelledby='headingThree' data-parent='#jobThree'>
                            <div className='card-body p-2'>
                                <div className='row'>
                                    <div className='col'>The Sun Valley Rice Company</div>
                                    <div className='col d-flex justify-content-end'>Arbuckle, CA</div>
                                </div>
                                Designed and developed over 40 ad-hoc SQL reports for executive team, managers, and end users Debugged technical issues with SSRS reports created by 3rd party consultants and implemented bug fixes Defined functional and technical requirements to integrate truck scales into Dynamics NAV ERP and performed unit, integration, and user acceptance testing to correct 18 critical defects before deployment Configured and deployed EDI documents (850, 855, 856, and 810) with multiple trading partners Wrote functional and technical documentation for multiple business and ERP process improvements Developed an ad-hoc report in Power BI to identify and quantify the negative impact of retaliatory tariffs for rice exports to the EU.
                            </div>
                        </div>
                    </div>
            </div>
            {/* //jobFour */}
            <div className='accordian pb-1' id='jobFour'>
                    <div className='card'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn btn-block' 
                                type='button' 
                                data-toggle='collapse' 
                                data-target='#collapseFour'
                                aria-controls='collapseFour'>
                                    <div className='row'>
                                        <div className='col col d-flex justify-content-start'>Systems Manager</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>March 2018 – October 2018</div>
                                    </div>
                            </button>
                        </h5>
                        <div id='collapseFour' className='collapse' aria-labelledby='headingFour' data-parent='#jobFour'>
                            <div className='card-body p-2'>
                                <div className='row'>
                                    <div className='col'>Mary Ann’s Baking Company</div>
                                    <div className='col d-flex justify-content-end'>Sacramento, CA</div>
                                </div>
                                    Drove Dynamics NAV upgrade project (2009 R2 to 2017)
                                    Composed project plan to determine critical path and resource requirements
                                    Developed detailed test plans through user interviews and coached end users through effective testing
                                    Tested and analyzed Jet Report issues and designed modifications to resolve issues
                                    Managed project budget approved quotes, work orders, and invoices from Dynamics NAV partner
                                    Resolved issues by modifying custom report layouts using SQL Report Builder
                                    Managed technical implementation of RedZone Production System
                                    Developed an automated stored procedure in SQL Server to transform and export production schedule from Dynamics NAV into RedZone daily
                                    Created, and modified Tableau reports for distribution of manufacturing data from RedZone Delivered oversight of Managed Services Provider – weekly project management meeting to set organizational priorities for improving IT Infrastructure
                                    Analyzed existing production material requisition process and developed detailed process documentation through interactive discovery sessions with key staff for use in process re-engineering
                            </div>
                        </div>
                    </div>
            </div>
            {/* //jobFive */}
            <div className='accordian pb-1' id='jobFive'>
                    <div className='card'>
                        <h5 className='mb-0'>
                            <button 
                                className='btn btn-block' 
                                type='button' 
                                data-toggle='collapse' 
                                data-target='#collapseFive'
                                aria-controls='collapseFive'>
                                    <div className='row'>
                                        <div className='col col d-flex justify-content-start'>ERP Project Manager</div>
                                        <div className='col-12 justify-content-start col-sm-6 d-flex justify-content-sm-end'>March 2017 – January 2018</div>
                                    </div>
                            </button>
                        </h5>
                        <div id='collapseFive' className='collapse' aria-labelledby='headingFive' data-parent='#jobFive'>
                            <div className='card-body p-2'>
                                <div className='row'>
                                    <div className='col'>Rumiano Cheese Company</div>
                                    <div className='col d-flex justify-content-end'>Willows, CA </div>
                                </div>
                                Optimized SQL queries embedded in automated PowerShell to decrease run time from 15 minutes to 45 seconds. Developed SSRS reports for business users and optimized existing legacy reports. Supported high volume retail EDI document exchange and integrations (850, 855, 856, 810, 852, 864, 853/854) identifying and resolving data issues for both inbound and outbound documents while meeting SLAs with customers. Eradicated malicious phishing attack from all 600+ mailboxes using Exchange Online PowerShell Provided frontline support and service to a complex office and manufacturing environment with over 150 Windows PCs and 100 OSX devices, VOIP phone, printers, servers, O365 hybrid deployment. Developed proof of concept for processing retail 852 selling data with both SSIS and Java from JC Penny’s, Target, and Kohls into an inhouse database eliminating dependency on a third-party vendor.
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default WorkExperience