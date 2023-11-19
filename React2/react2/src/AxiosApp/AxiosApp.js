import React, { useState, useEffect } from "react";
import axios from "axios";
import AxiosFunc from "./AxiosFunc";

const API_URL = "https://jsonplaceholder.typicode.com/users";



function AxiosApp(props) {
  const [userList,setUserList] = useState([])
  useEffect(()=>{
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setUserList(data);
      });
  },[])
  return (
    <div>
      {console.log(userList)}
      <AxiosFunc userList={userList}/>
    </div>
  );
}

export default AxiosApp;
