import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { logOut, user } = useContext(AuthContext)


    const handleLogout = () => {
        logOut()
    }
    return (
        <div className="navbar bg-neutral top-0 text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-neutral-content rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Pages
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2  bg-neutral text-neutral-content">
                                <li><Link to="/chef">Top Chef</Link></li>
                                <li><Link to="/foods">Our Top Foods</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">CHEF TABLE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Pages
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2  bg-purple-600 text-neutral-content">
                            <li><Link to="/chef">Top Chef</Link></li>
                            <li><Link to="/foods">Our Top Foods</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user && <FaUserCircle className='me-2' style={{ fontSize: '2rem', color: 'red' }} />
                }
                {
                    user ? <button className="btn  bg-purple-400" onClick={handleLogout}>Logout</button> : <Link to="/login"><button className="btn  bg-purple-400">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default NavigationBar;

