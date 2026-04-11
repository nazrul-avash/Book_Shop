import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-[1200px] mx-auto'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayOut;