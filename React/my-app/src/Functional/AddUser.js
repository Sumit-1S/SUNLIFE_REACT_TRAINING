import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddUser(props){
    let addUser=(e)=>{
        e.preventDefault()
        const data = e.target.elements.uname.value
        props.au(data)
        e.target.elements.uname.value = null
    }

        return (
            <div>
                <h2>I am Add User Functionality...</h2>
                <form onSubmit={addUser}>
                    Username : <TextField label="username" id="username" name = 'uname' placeholder="Eg: SumitSingh"/>
                    <Button variant="contained" type="Submit">Add User</Button>
                </form>
            </div>
        )
    
}
export default AddUser;