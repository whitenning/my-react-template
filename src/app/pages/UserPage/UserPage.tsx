import React, { useEffect, useState } from 'react';
import './UserPage.scss'

// Import modules here
import axios from 'axios';
import { useParams } from 'react-router';

// Import components here
import Navbar from '../../components/Navbar/Navbar';
import Planet from '../../components/Planet/Planet';


function UserPage (){
  const [user, setUser]= useState({username: null, email: null, address: null})
  const {address} = useParams()

  useEffect(() => {
    // Fetch user
     axios.get(`https://new-backend.unistory.app/api/data/address/${address}`).then((res)=> {
      setUser(res.data)
     })
  }, [address])

    return (
      <>
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      <main className='user-page container'>
        
    <section className="user" >
        <h2>PERSONAL DATA</h2>
            <div className="name">
                <h3>NAME</h3>
                {user != null && <h4>{user.username}</h4>}
            </div>
    
            <div className="email">
                <h3 >EMAIL</h3>
                {user != null && <h4>{user.username}</h4>}
            </div>
            <div className="wallet">
                <h3 >WALLET</h3>
                {user != null && <h4>{user.address}</h4>}
            </div>
    </section>

        <Planet />

</main>
</>
    );
  }


export default UserPage;