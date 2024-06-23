
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount")
    }
    render(){
        console.log("Parent Render")
        return(
            <div className="mx-2 my-2">
            <h1 className="font-bold flex justify-center">About Us</h1>
            <UserClass name={"Ranjay"} location={"Raipur"}/>
        </div>
        )
}
}


export default About;