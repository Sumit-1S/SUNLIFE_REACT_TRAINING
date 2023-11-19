import React, { useEffect, useState } from 'react';

function NotesApp(props) {
    const [users,setUsers] = useState([])
    const [title,setTitle] = useState("")
    const [email,setEmail] = useState("")

    useEffect(()=>{
        setUsers(()=>JSON.parse(localStorage.getItem('notes')))
    },[])
    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(users))
    },[users])

    const addUser = (e) =>{
        e.preventDefault()
        console.log(title,email)
        setUsers([...users, {title, email}])
        console.log(users)
    }

    const deleteById = (id) =>{
        setUsers(users.filter((user)=>users.indexOf(user)!==id))
    }    
    
    return (
        <div>User Data : 
            {users.map(
                (user,idx) => (
                    <div key={idx}>
                        <div>
                        {user.title} &nbsp; 
                        {user.email} &nbsp;
                        </div>
                        <button onClick={()=>deleteById(users.indexOf(user))}>Delete</button> 
                    </div>
                )
            )}
            <div>
                <form onSubmit={addUser}>
                    Username: <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                    Email:    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default NotesApp;