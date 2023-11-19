import { Component } from "react";
import Button from "@mui/material/Button";

export default class User extends Component{
    delete=(e)=>{
        e.preventDefault()
        this.props.deleteUser(this.props.ud)
    }

    deleteById=(e)=>{
        e.preventDefault()
        this.props.deleteUserById(this.props.useridx)
    }

    render(){
        return (
            <div>
                <h2>{this.props.ud}</h2> 
                <Button variant="contained" onClick={this.delete}>Delete Similar</Button> 
                <Button variant="contained" onClick={this.deleteById}>Delete</Button>
            </div>
        )
    }
}