

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate} from 'react-router-dom'

const Inquiries = () => {
    const [inquiryData, setInquiryData] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
      const fetchInquiries = async () => {
        try {
          const response = await axios.get('http://localhost:4000/inquires');
          setInquiryData(response.data.inquires);
          console.log("Fetched data:", response.data.inquires); // Store fetched data in state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchInquiries(); // Call the function inside useEffect
    }, []);

    return (
   
      <div >
        <div>
      <button style={{color:"blueviolet",right:'0',position:'absolute',marginRight:'40px'}} onClick={()=>{navigate('/')}}>close</button>
      </div>
        <h1 style={{textAlign:"center",margin:'20px auto',fontSize:'26px',fontWeight:'500'}}>Inquiries</h1>
        <TableContainer sx={{margin:'10px auto',display:'flex',justifyContent:'center'}}>
      <Table sx={{ width: 850 }} aria-label="order table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>User</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Email</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Message</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">ProjectType</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Budget</TableCell>

            {/* Add more headers as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {inquiryData.map((data,index) => (
            <TableRow key={index}>
              {/* <TableCell component="th" scope="row">
                {data._id}
              </TableCell> */}
              <TableCell align="right">{data.name}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.message}</TableCell>
              <TableCell align="right">{data.projectType}</TableCell>
              <TableCell align="right">{data.budget}</TableCell>

              {/* Add more cells for additional order details */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    )
}

export default Inquiries;

