import { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class AddUser extends Component{
    addUser=(e)=>{
        e.preventDefault()
        const data = e.target.elements.uname.value
        this.props.au(data)
        e.target.elements.uname.value = null
    }

    render(){
        return (
            <div>
                <h2>I am Add User Functionality...</h2>
                <form onSubmit={this.addUser}>
                    Username : <TextField label="username" id="username" name = 'uname' placeholder="Eg: SumitSingh"/>
                    {/* <input type="text" ></input> */}
                    <Button variant="contained" type="Submit">Add User</Button>
                </form>
            </div>
        )
    }
}