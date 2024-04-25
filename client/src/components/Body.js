import React from 'react'
import sidebg from '../../assets/sidebg.png'
import useScreenSize from '../hooks/useScreenSize';
import { Outlet } from 'react-router-dom';
import useScreenSize from '../hooks/useScreenSize';

const Body = () => {
    const isMobileOrTablet = useScreenSize()
    return (
        <div className="flex justify-center items-center h-screen w-screen py-20">
            {isMobileOrTablet && (<div className="flex justify-center items-center w-8/12">
                <img className="w-90" src={sidebg} alt="Sample" />
            </div>)}
            <div className={`md:w-${isMobileOrTablet ? 'full' : '4/12'} bg-white rounded h-sreen w-96 mx-10`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Body