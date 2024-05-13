

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
      // Fetch messages when the component mounts
      axios.get('https://portfolio-backend-9q3r.onrender.com/api/messages/fetch')
        .then(response => {
          setMessages(response.data);
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        });
    }, []);




  return (
    <div className='px-32'>
    <h2 className='text-white font-bold text-4xl mb-10'>Admin Dashboard</h2>
    <table className='table-fixed w-9/12 '>
      <thead className='bg-slate-700 text-left'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody className="bg-zinc-500">
        {messages.map(message => (
          <tr key={message._id}>
            <td>{message.name}</td>
            <td>{message.email}</td>
            <td>{message.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AdminDashboard