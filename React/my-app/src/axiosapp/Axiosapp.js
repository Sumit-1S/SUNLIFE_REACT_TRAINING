import React, { Component } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AxiosClass from "./AxiosClass";
import AxiosFunc from "./AxiosFunc";

const API_URL = "https://jsonplaceholder.typicode.com/users";
class AxiosApp extends Component {
  state = {
    userList: [],
  };
  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        this.setState({ userList: data });
      });
  }
  render() {
    return (
      <div>
        {/* <AxiosClass/> */}
        <AxiosFunc userList={this.state.userList}/>
      </div>
    );
  }
}

export default AxiosApp;
