import React, { useState } from 'react';
import { Avatar, Button, Typography, Tooltip, Dialog, DialogTitle, TextField}from "@mui/material";
import {Search, ShoppingCart, Close} from "@mui/icons-material";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [name, setName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [onRegister, setOnRegister] = useState(false);
  
    const handleOpenClose = (event, reason) => {
      if (reason && reason === "backdropClick") return;

      setOpen(!open);
      setOnRegister(false);
      setLoginEmail("");
      setLoginPassword("");
      setName("");
      setRegisterEmail("");
      setRegisterPassword("");
    };

    const handleSearchSubmit = (e)=>{
      e.preventDefault();
      if(!searchQuery) return;

      alert(`Search Submitted\nQuery : ${searchQuery}`);
    }

    const handleLoginClick = ()=>{
      setOpen(!open);
    }

    const handleLoginSubmit = (e)=>{
      e.preventDefault();
      alert(`Login clicked\n\nEmail: ${loginEmail}\nPassword: ${loginPassword}`);
      setLoggedIn(!loggedIn);
    }

    const handleRegisterSubmit = (e)=>{
      e.preventDefault();
      alert(`Register clicked\n\nName: ${name}\nEmail: ${registerEmail}\nPassword: ${registerPassword}`)
    }
    const switchTab = (tab)=>{
      if(tab === "register"){
        setLoginEmail("");
        setLoginPassword("");
        setOnRegister(true);
      }
      if(tab === "login"){
        setName("");
        setRegisterEmail("");
        setRegisterPassword("");
        setOnRegister(false);
      }
    }

  return (
    <div className="navbar">
        <Typography className='logo'>E-SHOP</Typography>
        <form className="searchForm" onSubmit={handleSearchSubmit}>
            <input type="text" placeholder='Search for products...' value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} />
            <Search/>
        </form>
        <div className="profile">
            {!loggedIn ? (<Button variant='contained' size='small' onClick={handleLoginClick}>Login</Button>) : (
                <Avatar onClick={handleLoginClick}/>
            )}
        </div>
        <Tooltip arrow title="View items added to cart" placement='bottom'>
            <ShoppingCart className='cartSvg'/>
        </Tooltip>
        <Dialog onClose={handleOpenClose} open={open}>
          <Close className='closeLoginBoxIcon' onClick={handleOpenClose} />
          <div className="dBox">
            <form className={`loginBox ${onRegister ? "NTX" : "UTX"}`} onSubmit={handleLoginSubmit}> 
              <DialogTitle>Login</DialogTitle>
              <TextField className='formInputs' type="email" required label="Email" variant="outlined" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
              <TextField className='formInputs' required type="password" label="Password" variant="outlined" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
              <Button variant='contained' type='submit'>Login</Button>
              <Link to="/password/forgot">Forgot Password</Link>
              <Button onClick={()=>switchTab("register")}>New to E-Shop?Create an account</Button>
            </form>
            <form className={`registerBox ${onRegister ? "UTX" : "TX"}`} onSubmit={handleRegisterSubmit}>
                <DialogTitle>Register</DialogTitle>
                <TextField className='formInputs' required label="Full Name" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
                <TextField className='formInputs' type="email" required label="Email" variant="outlined" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} />
                <TextField className='formInputs' required type="password" label="Password" variant="outlined" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)}/>
                <Button variant='contained' type='submit'>Register</Button>
                <Button onClick={()=>switchTab("login")}>Already have an account?Log-In</Button>
            </form>
          </div>
        </Dialog>

    </div>
  )
}

export default Navbar;