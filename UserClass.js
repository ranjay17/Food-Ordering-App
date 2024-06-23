import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Ranjay",
                location: "Raipur"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ranjay17")
        const json = await data.json();
        this.setState({

            userInfo: json
        })
        console.log(json)
    }
    
    render(){
        const{name, location, avatar_url} = this.state.userInfo;
       // const{count} = this.state
        console.log(this.props.name +"Child Render")
        return(
            <div>
                <div className="flex justify-center">
                <img src={avatar_url} className="m-2 p-2 h-20"/>
                </div>
                <div className="flex justify-center font-bold text-slate-700 text-sm">
                    <div>
                        <h2>Name: {name}</h2>
                        <h3>Location: {location}</h3>
                    </div>
                </div> 
            </div>
        )
    }
}

export default UserClass;