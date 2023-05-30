import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { FaRegThumbsUp, FaThumbsUp, FaArrowLeft } from "react-icons/fa";

const ChefDetails = () => {
    const details = useLoaderData()
    const { chef_picture, number_of_recipes, likes, years_of_experience, recipes, description, chef_name } = details
    console.log(details)
    return (
        <div className='flex sm:auto-cols-max text-white bg-slate-800 justify-around w-full py-10'>
            <div className=''>
                <h3 className='text-indigo-600 text-2xl font-bold'>Hello, I am</h3>
                <h1 className='text-5xl text-rose-800 font-bold'>{chef_name}</h1>
                <h3 className='mt-6 text-2xl'>About Me:</h3>
                <p className='w-96'>{description}</p>

                <div className='mt-12'>
                    <p>Total Recipes: {number_of_recipes}</p>
                    <p>Experience: {years_of_experience} Years</p>
                    <div className='flex items-center'>
                        <FaThumbsUp className='me-4'></FaThumbsUp>  {likes}
                    </div>
                    <Link to="/chef"><button className='rounded mt-4 bg-purple-900 px-10 py-3'><FaArrowLeft /> Back To Top Chef</button></Link>
                </div>
                <h1 className='text-center text-4xl font-bold text-sky-500 mt-6'>My Best Recipes</h1>
                <div className='grid sm:auto-cols-max sm:grid-cols-1 md:grid-cols-3'>
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>

            </div>
            <img className='rounded-md' src={chef_picture} alt="" />
        </div>
    );
};

export default ChefDetails;