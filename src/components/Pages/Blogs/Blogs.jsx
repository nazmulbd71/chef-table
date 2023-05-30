import React from 'react';

const Blogs = () => {
    return (
        <div className='border border-blue-700 p-10 rounded'>
            <h1 className='font-bold text-4xl text-center text-slate-700'>🔷Questions & Answers🔷</h1>
            <div className='border p-5 rounded my-10'>
                <h1 className='text-3xl text-center font-bold'>Q1: What is the differences between Uncontrolled and Controlled components ?</h1>
                <p className='text-center text-lg mt-6'>Answer : In React Control components are seems to be a parent component and have their state and behavior controlled by the parent component. These components are used as props to pass down from the parent component to update their state and behavior. But the other side we have uncontrolled components that are used to components that manage their own state internally like asynchronously.</p>
            </div>

            <div className='border p-5 rounded my-10'>
                <h1 className='text-3xl text-center font-bold'>Q2: How to validate React props using PropTypes ?</h1>
                <p className='text-center text-lg mt-6'>Answer :
                    <ol>
                        <li><span className='font-bold text-blue-700'>Anything</span> : I can pass Anything by using Props.</li>
                        <li><span className='font-bold text-blue-700'>Boolean</span> : I can pass data by using Boolean.</li>
                        <li><span className='font-bold text-blue-700'>Number</span> : I can pass data by using Number</li>
                        <li><span className='font-bold text-blue-700'>String</span> : I can pass data by using String.</li>
                        <li><span className='font-bold text-blue-700'>Function</span>: I can pass data by using Function.</li>
                        <li><span className='font-bold text-blue-700'>Array</span> : I can pass data by using Array.</li>
                        <li><span className='font-bold text-blue-700'>Object</span>: I can pass data by using Object.</li>
                        <li className='text-rose-700 font-bold'>If you need anything else to pass data you can use anything.</li>
                    </ol></p>
            </div>

            <div className='border p-5 rounded my-10'>
                <h1 className='text-3xl text-center font-bold'>Q3: What is the difference between NodeJS and Express JS ?</h1>
                <p className='text-center text-lg mt-6'>Answer : NodeJS is the package, which provides the JavaScript run-time environment, but the other side Express is a framework that sits on top of NodeJS and helps us to handle requests and responses. After all, I can say that Node JS handles server-side but Express JS is a framework which is handle the response and request.</p>
            </div>

            <div className='border p-5 rounded my-10'>
                <h1 className='text-3xl text-center font-bold'>Q4: What is a custom hook, and why will you create a custom hook ?</h1>
                <p className='text-center text-lg mt-6'>Answer : The custom hook is a JavaScript Function whose name starts with the use called a hook. Custom hook also uses (use) so it is a JavaScript Hook. If I need to reuse a hook in that case I need to make a custom hook. If I created a custom hook it improve our rendering speed of code & I don't need to render again and again. And it also saves me valuable time.</p>
            </div>
        </div>
    );
};

export default Blogs;