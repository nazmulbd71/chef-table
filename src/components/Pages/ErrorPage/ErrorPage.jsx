import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-96 h-60 border my-56 p-20 mx-auto'>
            <h1 className='text-red-600 text-2xl font-semibold'>404! NOT FOUND</h1>
            <p>Please Go To <Link to="/" className='text-blue-600'> Home Page </Link></p>
        </div>
    );
};

export default ErrorPage;