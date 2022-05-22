import React from "react";
import KugeLogo from '../../images/NavigationBar/KugeGemuLogo.png'
import './NavBar.css'
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className='navBar'>
            <div className='navBar-logoBox'>
                <img className='navBar-logoBox-img' src={KugeLogo} alt='KugeGemu Logo'/>
                <div className='navBar-logoBox-txt'>KugeGemu</div>
            </div>
            <div className='navBar-pageRef'>
                <Link className='link' to="/">
                    <div className='navBar-pageRef-Home click'>Home</div>
                </Link>

                <Link className='link' to="/clan">
                    <div className='navBar-pageRef-Clan click'>Clan</div>
                </Link>
                <div className='navBar-pageRef-Events click'>Events</div>
                <div className='navBar-pageRef-AboutUs click'>About Us</div>
            </div>
            <div className='navBar-buttons'>
                <Link className='Link' to='/login'>
                    <button className='navBar-buttons-Login clickable' type='button'>Login</button>
                </Link>
                <Link className='Link' to='/signUp'>
                    <button className='navBar-buttons-JoinUs clickable' type='button'>Join Us</button>
                </Link>

            </div>
        </div>
    );

}
