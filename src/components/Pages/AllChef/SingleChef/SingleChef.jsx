import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleChef = ({ singleChef }) => {
    const { chef_picture, chef_name, id, title } = singleChef
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-10">
            <figure className="px-10 pt-10">
                <img src={chef_picture} alt="" className="rounded-xl w-96 h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl">{chef_name}</h2>
                <p className='font-bold text-rose-800'>{title}</p>
                <div className='flex'>
                    <FaFacebookSquare></FaFacebookSquare>
                    <FaGithub className='mx-10'></FaGithub>
                    <FaLinkedin></FaLinkedin>
                </div>
                <div className="card-actions">
                    <Link to={`/chefAll/${id}`}><button className="btn mt-2 btn-primary">View Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;