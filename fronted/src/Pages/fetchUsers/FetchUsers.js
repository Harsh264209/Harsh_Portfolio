import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate} from 'react-router-dom'

const FetchUsers = () => {
  // Define state to hold the fetched data
  const [userData, setUserData] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/fetch');
        setUserData(response.data.visitors); // Store fetched data in state
        console.log("Data fetched successfully",userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the function inside useEffect
  }, []); // Pass an empty dependency array to run this effect only once after the component mounts

  return (
    // <div>
    //   <h2>User Data</h2>
    //   <table stryle={{border:'1px '}}>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Message</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* Map over the userData array to generate table rows */}
    //       {userData.map((data, index) => (
    //         <tr key={index}>
    //           <td>{data.name}</td>
    //           <td>{data.email}</td>
    //           <td>{data.message}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

<div>
<div>
      <button style={{color:"blueviolet",right:'0',position:'absolute',marginRight:'40px'}} onClick={()=>{navigate('/')}}>close</button>
      </div>
  <h1 style={{fontSize:'26px',fontWeight:'500',margin:"40px auto",textAlign:'center'}}>Visitors:</h1>
<TableContainer sx={{margin:'10px auto',display:'flex',justifyContent:'center'}}>
      <Table sx={{ width: 850 }} aria-label="order table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>User ID</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">User</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Email</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Message</TableCell>
            {/* Add more headers as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((data,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {data._id}
              </TableCell>
              <TableCell align="right">{data.name}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.message}</TableCell>
              {/* Add more cells for additional order details */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
   


  );
}

export default FetchUsers;



