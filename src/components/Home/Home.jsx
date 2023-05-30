import React from 'react';
import Lottie from "lottie-react";
import cooking from '../../assets/chef-cooking-fish.json'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import image from '../../assets/body-food-images/body_food 1.png'
import image2 from '../../assets/body-food-images/body_food 2.png'
import image3 from '../../assets/body-food-images/body_food 3.png'
import image4 from '../../assets/body-food-images/body_food 4.png'
import image5 from '../../assets/body-food-images/boy_food 5.png'
import image6 from '../../assets/body-food-images/body_food 6.png'

const Home = () => {
    return (
        <div className='w-100% h-100% bg-slate-800'>
            <section>
                <div className="px-4 flex items-center justify-between py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">

                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                            For the love of delicious food
                        </span>
                        <h1 className="mb-8 tracking-wide text-4xl font-bold leading-none  text-neutral-600 md:text-7xl lg:text-5xl">
                            CHEF <span className='ms-4 text-rose-800'>TABLE</span>
                        </h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo aperiam magnam praesentium dicta hic quisquam libero quod officia, deserunt laborum? Vero ullam quo blanditiis exercitationem sapiente unde officia vitae?
                        </p>
                        <p className="">
                            Test Eat Enjoy...
                        </p>
                        <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                            <div className="mt-3 rounded-lg sm:mt-0">
                                <Link to="/">
                                    <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Order Food
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    See Food Menu
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mx-auto ">
                        <div className="w-full rounded-xl">
                            <div>
                                <div className="w-full">
                                    <div>
                                        <div>
                                            <Lottie
                                                animationData={cooking}
                                                loop={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-10'>
                    <h1 className='text-white text-4xl text-center my-16'>All Of Our Best Foods</h1>
                    <Marquee>
                        <img className='mx-8' style={{ width: '300px', height: '300px', borderRadius: "25% 10%" }} src={image} alt="" />
                        <img className='mx-8' style={{ width: '300px', height: '300px', borderRadius: "25% 10%" }} src={image2} alt="" />
                        <img className='mx-8' style={{ width: '300px', height: '300px', borderRadius: "25% 10%" }} src={image3} alt="" />
                        <img className='mx-8' style={{ width: '300px', height: '300px', borderRadius: "25% 10%" }} src={image4} alt="" />
                        <img className='mx-8' style={{ width: '300px', height: '300px', borderRadius: "25% 10%" }} src={image5} alt="" />
                        <img className='mx-8' style={{ width: '300px', height: '300px', borderRadius: "25% 10%" }} src={image6} alt="" />
                    </Marquee>
                </div>
            </section>
        </div>

    );
};

export default Home;