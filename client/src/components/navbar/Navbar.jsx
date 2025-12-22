import React, { useEffect, useState } from 'react'
import "./navbar.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import avatar from "/ReactApp/Internshala/GIgnest/client/src/assets/avatar.png"
import logo from "/ReactApp/Internshala/GIgnest/client/src/assets/logo.svg"
import newRequest from '../../../utils/newRequest';

const Navbar = () => {
    const [scrollFlag, setScrollFlag] = useState(false);
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const isActive = () => {
        window.scrollY > 0 ? setScrollFlag(true) : setScrollFlag(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        // Additional cleanup function to add cleanup functions.
        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, [])

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = async (e) => {
        e.preventDefault();
        try{
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        }catch(err){
            console.log(err)
        }
    } 

  return (
    <div className={ scrollFlag || pathname !== "/" ? "navbar active" : "navbar" }>
        <div className='main-container'>
            <div className='logo'>
                <Link className = "link" to = "/">
                <span>Gignest</span>
                <span><img className= "logo-image" src={logo}/></span>
                </Link>
            </div>
            <div className='actions'>
                <Link className='link'><span className='action-button'>Business</span></Link>
                <Link to= "/gigs" className='link'><span className='action-button'>Explore </span></Link>
                {console.log(currentUser.body?.isSeller)}
                {!currentUser.body?.isSeller && <span className='action-button'>Become a seller</span>}
                {!currentUser && <Link to= "/signin" className='link'><span className='action-button'>Sign In</span></Link>}
                {!currentUser && <Link to= "/signup" className='link'><button className='join-button'>Join</button></Link>}
                {currentUser && (
                    <div className='user' onClick={()=> {setOpen(!open)}}>
                        <img src={currentUser.img || avatar} alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isSeller && (
                                <>
                                    <Link className = "link padd" to="/mygigs">Gigs</Link>
                                    <hr/>
                                    <Link className = "link padd" to="/add">Add New Gig</Link>
                                    <hr/>
                                </>
                            )}
                            <Link className = "link padd" to="/orders">Orders</Link>
                            <Link className = "link padd" to="/messages">Messages</Link>
                            <Link className = "link padd" onClick={handleLogout}>Log out</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(scrollFlag || pathname !== "/") && (
            <>
                <hr className='line'/>
                <div className='menu-container'>
                        <Link className = "link padd" to="/">AI</Link>
                        <Link className = "link padd" to="/">Engineering</Link>
                        <Link className = "link padd" to="/">Web Designing</Link>
                </div>
                <hr className='line'/>
            </>
        )}
    </div>
  )
}

export default Navbar