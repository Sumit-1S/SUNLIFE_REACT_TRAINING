import React, { Component } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const API_URL = "http://localhost:8060/mainApp/findAll";
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
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">City</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.userList.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="right">{user.userId}</TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default AxiosApp;
