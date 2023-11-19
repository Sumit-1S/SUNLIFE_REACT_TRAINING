import { Component } from "react";
import Button from "@mui/material/Button";
import User from "./User";

export default class Users extends Component{
    render(){
        return (
            <div>
                <h2>I am Users : </h2>
                {
                this.props.userData.map(
                    (userData,idx) => <User key={idx} useridx={idx} ud={userData} deleteUser={this.props.deleteUser} deleteUserById={this.props.deleteUserById}/>
                )}
                <br/>
                <Button variant="contained" disabled={!this.props.userLength} onClick={this.props.deleteAll}>Delete ALL</Button>
            </div>
        )
    }
}