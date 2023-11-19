import React, { Component } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AxiosFunc(props) { 
        return (
            <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Website</TableCell>
                  <TableCell align="right">Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.userList.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.website}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        );
    }

 
export default AxiosFunc;