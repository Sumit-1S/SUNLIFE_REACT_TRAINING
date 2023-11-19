import { Component } from "react";
import Button from "@mui/material/Button";
import User from "./User";

function Users(props){
        return (
            <div>
                <h2>I am Users : </h2>
                {
                props.userData.map(
                    (userData,idx) => <User key={idx} useridx={idx} ud={userData} deleteUser={props.deleteUser} deleteUserById={props.deleteUserById}/>
                )}
                <br/>
                <Button variant="contained" disabled={!props.userLength} onClick={props.deleteAll}>Delete ALL</Button>
            </div>
        )
}
export default Users;