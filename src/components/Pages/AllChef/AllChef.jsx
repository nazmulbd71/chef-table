import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef/SingleChef';

const AllChef = () => {
    const chefAll = useLoaderData();

    return (
        <div className='bg-slate-800'>
            <h1 className='text-5xl text-sky-700 font-bold text-center py-12'>The Best Chefs We Have <span className='text-rose-500'>...</span></h1>
            <div className='grid sm:auto-cols-max  md:grid-cols-3 mx-32'>
                {
                    chefAll.map(singleChef => <SingleChef
                        key={singleChef.id}
                        singleChef={singleChef}
                    ></SingleChef>)
                }
            </div>

        </div>
    );
};

export default AllChef;