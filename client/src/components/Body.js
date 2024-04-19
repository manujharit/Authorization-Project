import React from 'react'
import sidebg from '../../assets/sidebg.png'
import useScreenSize from '../hooks/useScreenSize';
import { Outlet } from 'react-router-dom';
import useScreenSize from '../hooks/useScreenSize';

const Body = () => {
    const isMobileOrTablet = useScreenSize()
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            {isMobileOrTablet && (<div className="md:w-8/12 px-48 ">
                <img className="w-90" src={sidebg} alt="Sample" />
            </div>)}
            <div className={`md:w-${isMobileOrTablet ? 'full' : '4/12'} bg-white rounded h-96 w-96 justify-center items-center mx-10`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Body