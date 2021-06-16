import React from "react"
import Resume from './Resume'

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