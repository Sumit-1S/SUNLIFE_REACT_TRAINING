import Button from "@mui/material/Button";

function User(props) {
    const deleteByUd=(e)=>{
        e.preventDefault()
        props.deleteUser(props.ud)
    }

    let deleteById=(e)=>{
        e.preventDefault()
        props.deleteUserById(props.useridx)
    }
        return (
            <div>
                <h2>{props.ud}</h2> 
                <Button variant="contained" onClick={deleteByUd}>Delete Similar</Button> 
                <Button variant="contained" onClick={deleteById}>Delete</Button>
            
            </div>
        )
}
export default User;