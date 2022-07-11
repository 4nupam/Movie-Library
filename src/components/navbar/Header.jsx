import React from 'react';
import {Link} from 'react-router-dom';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const Header = () => {


    return (
        <nav className='flex justify-between h-[10vh] bg-[#77dd77] pl-[20px] pr-[20px]'>
            <div className='my-auto mx-[5px] flex text-white'>
                <MovieFilterIcon size={22}/><h3 className='ml-[5px]'>MovieCorner</h3>
            </div>
            <div className='w-[400px] flex justify-evenly my-auto text-white'>
                <Link to='/'>
                    Home 
                </Link>
                <Link to='/list'>
                    List 
                </Link>
                <Link to='/sign-up'>
                    Sign Up 
                </Link>
                <Link to='/sign-in'>
                    Sign In 
                </Link>
            </div>
        </nav>
    );
}

export default Header;