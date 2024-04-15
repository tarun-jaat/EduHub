import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux"

import { MdKeyboardArrowDown } from "react-icons/md";


function Profile() {
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/profile');
          const data = response.data;
          setFirstName(data.firstName);
        } catch (error) {
          console.error('Error fetching first name: ', error);
        }
      };
  
      fetchData();
    }, []);
  

  return (
    <div>
        <img src={user?.image}
            alt={`profile-${user?.firstName}`} />
        <MdKeyboardArrowDown/>
        
    </div>
  )
}

export default Profile