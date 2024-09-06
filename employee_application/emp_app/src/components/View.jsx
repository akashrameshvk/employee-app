
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios, { Axios } from 'axios';
import { Button } from '@mui/material';

const View = () => {
    var [emp, setemp] = useState([])
    useEffect(()=>{
    axios.get("http://localhost:3004/view")
        .then((res) => {
            console.log(res)
            setemp(res.data)
        })
        .catch((error) => console.log(error))
    
    })
    const delValue = (id) => {
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res)=> {
                console.log(res.data.message)
                alert("amployee delete")
        })

    }
  return (
      <div>
          <br /><br /><br /><br /><br />
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                  <TableHead>
                      <TableRow>
                          <TableCell>NAME</TableCell>
                          <TableCell >AGE</TableCell>
                          <TableCell >DEPARTMENT</TableCell>
                          <TableCell >SALLARY</TableCell>
                          
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {emp.map((val) => {
                          return (
                              
                      <TableRow>
                                  <TableCell>{ val.Name}</TableCell>
                                  <TableCell >{ val.Age}</TableCell>
                                  <TableCell >{ val.Department}</TableCell>
                                  <TableCell >{val.Sallary}</TableCell>
                                  <TableCell>
                                      <Button variant="contained">UPDATE</Button>
                                      &nbsp;
                                      <Button variant="contained" onClick={() => {
                                          delValue(val._id)
                                      }}> DELETE</Button>
                                  </TableCell>
                              </TableRow> 
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
          
          
    </div>
  )
}

export default View