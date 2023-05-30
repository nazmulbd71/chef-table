import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Home from '../components/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;