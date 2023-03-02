import React, { useEffect } from 'react';
import './Navbar.scss'

// Import modules here
import {useSelector } from 'react-redux';
import { useEthers } from "@usedapp/core";






function Navbar(){

    // Get wallet from store
    const wallet:any = useSelector((state: any)=> state.auth.wallet)

    // Connect wallet
    const { activateBrowserWallet } = useEthers()

    return (
      <main className="container">
        <section>
          <nav>
            <a href="/">LOGO</a>
            {wallet === '' ? <button className="btn-primary" onClick={()=> activateBrowserWallet()}>CONNECT METAMASK</button>
            : <button className="btn-primary connected" >{wallet}</button> }
        
          </nav>
     
       
        </section>
      </main>

    );
  
}
export default Navbar
