import React from 'react';

const Recipe = ({ recipe }) => {
    const { recipe_image, recipe_name, recipe_description } = recipe
    return (

        <div>
            <div className='m-10 border rounded p-10'>
                <img className='w-40 h-40 rounded mx-auto' src={recipe_image} alt="" />
                <h1 className='text-center'>{recipe_name}</h1>
            </div>
        </div>
    );
};

export default Recipe;