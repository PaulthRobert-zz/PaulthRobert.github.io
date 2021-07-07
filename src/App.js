import React from "react"
import Resume from './Resume'
// import accordian from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toast} from 'bootstrap'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            drillDown: 'Home'
        }
    }
    render(){
        return(
            <Resume/>
        )
    }
}


export default App