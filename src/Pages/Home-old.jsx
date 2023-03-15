import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <main className="h-screen flex items-center px-6 lg:px-32">
            <section className="animate-fade-in-down w-full md:w-9/12 xl:w-8/12">
                <h1 className="text-3xl my-5 lg:text-7xl font-bold text-green-500">
                    Desta Arifta
                </h1>
                <h1 className="text-3xl lg:text-2xl font-bold text-white">
                    I'm a passionate 
                     <span className="underline underline-offset-3 decoration-8 mx-4 decoration-green-400 dark:decoration-green-600">
                         Full Stack Developer 
                    </span> 
                     from Indonesia
                </h1>

                <div className=" my-8 w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col py-4 mt-5 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <Link to="/" className="block lg:text-xl py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                        <Link to="/About" className="block lg:text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                About
                            </Link>
                        </li>
                        <li>
                        <Link to="/Resume" className="block lg:text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Resume
                            </Link>
                        </li>
                        <li>
                        <Link to="/Photos" className="block lg:text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Photos
                            </Link>
                        </li>
                        <li>
                        <Link to="/Portfolio" className="block lg:text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                        <Link to="/Contact" className="block lg:text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="flex justify-center lg:justify-start flex-wrap gap-y-[20px] mb-[60px] lg:mb-0 lg:mt-[25px]">
                        <li className="mr-[20px] last:m-0 w-[40px] h-40px lg:w-[60px] lg:h-[60px]">
                            <a href="#" className="social-icon" target="_blank"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#a8a8a8"></circle>
                                <mask id="mask0_181_4637" maskUnits="userSpaceOnUse" x="8" y="8" width="24" height="24">
                                    <rect x="8" y="8" width="24" height="24" fill="#C4C4C4"></rect>
                                </mask>
                                <g mask="url(#mask0_181_4637)">
                                    <path d="M26.7174 15.5145C24.9889 15.5145 23.5827 14.1482 23.5827 12.4688C23.5827 12.2098 23.3668 12 23.1003 12H20.5165C20.2502 12 20.0341 12.2098 20.0341 12.4688V22.7615C20.0341 23.7488 19.2073 24.552 18.1912 24.552C17.1751 24.552 16.3484 23.7488 16.3484 22.7615C16.3484 21.774 17.1751 20.9708 18.1912 20.9708C18.4577 20.9708 18.6736 20.761 18.6736 20.5021V17.9916C18.6736 17.7328 18.4577 17.5228 18.1912 17.5228C15.2184 17.5228 12.7998 19.8729 12.7998 22.7615C12.7998 25.65 15.2184 28 18.1912 28C21.164 28 23.5827 25.65 23.5827 22.7615V18.2054C24.5428 18.7029 25.6113 18.9625 26.7174 18.9625C26.9838 18.9625 27.1998 18.7527 27.1998 18.4938V15.9833C27.1998 15.7245 26.9838 15.5145 26.7174 15.5145Z" fill="white"></path>
                                </g>
                            </svg>
                            </a>
                        </li>
                        <li className="mr-[20px] last:m-0 w-[40px] h-40px lg:w-[60px] lg:h-[60px]">
                            <a href="#" className="social-icon" target="_blank"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#11c408"></circle>
                                <path d="M21.386 36.4028L20.2679 38C15.6679 37.4889 12.1753 34.8056 11.004 33.5278C10.8762 26.5 13.8258 20.0579 15.3165 17.7153C17.361 15.9264 20.7471 15.1597 22.1846 15L22.504 15.6389C19.5651 16.15 17.4462 18.088 16.754 18.9931C24.2929 14.0097 33.3119 16.9167 36.879 18.9931C34.9624 16.8208 31.9276 15.8519 30.6499 15.6389L30.9693 15C33.6526 15 37.092 17.0231 38.3165 18.0347C41.2554 22.6347 42.0966 30.2801 42.1499 33.5278C40.6165 36.0833 35.4415 37.5741 33.0457 38L32.0874 36.4028C34.7707 35.3806 36.7193 33.4213 37.3582 32.5694C26.6249 38.4472 18.4045 34.8056 15.636 32.25C16.0193 33.1444 19.629 35.3912 21.386 36.4028Z" fill="white"></path>
                                <ellipse cx="22.0247" cy="27.7776" rx="2.39583" ry="2.875" fill="#a8a8a8"></ellipse>
                                <ellipse cx="31.2884" cy="27.7776" rx="2.39583" ry="2.875" fill="#a8a8a8"></ellipse>
                            </svg></a>
                        </li><li className="mr-[20px] last:m-0 w-[40px] h-40px lg:w-[60px] lg:h-[60px]">
                            <a href="#" className="social-icon" target="_blank"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#a8a8a8"></circle>
                                <path d="M29.6402 13.88C28.91 14.2 28.0986 14.4 27.2872 14.52C28.1392 14.04 28.7883 13.24 29.0722 12.28C28.2609 12.76 27.4089 13.08 26.4759 13.28C25.7051 12.48 24.6503 12 23.4738 12C21.202 12 19.3765 13.8 19.3765 16.04C19.3765 16.36 19.4171 16.68 19.4982 16.96C16.0905 16.8 13.0479 15.2 11.0195 12.72C10.6949 13.32 10.4921 14.04 10.4921 14.76C10.4921 16.16 11.2223 17.4 12.3177 18.12C11.628 18.08 11.0195 17.92 10.4515 17.6V17.64C10.4515 19.6 11.8714 21.24 13.7375 21.6C13.413 21.68 13.0479 21.76 12.6422 21.76C12.3582 21.76 12.1148 21.72 11.8714 21.68C12.3988 23.28 13.8998 24.44 15.6848 24.48C14.2649 25.56 12.5205 26.2 10.5732 26.2C10.2487 26.2 9.92415 26.2 9.59961 26.16C11.4657 27.36 13.6158 28 15.9282 28C23.4739 28 27.6118 21.84 27.6118 16.48C27.6118 16.32 27.6118 16.12 27.6118 15.96C28.3826 15.4 29.0722 14.72 29.6402 13.88Z" fill="white"></path>
                            </svg>
                            </a>
                        </li>
                        <li className="mr-[20px] last:m-0 w-[40px] h-40px lg:w-[60px] lg:h-[60px]">
                            <a href="#" className="social-icon" target="_blank"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#a8a8a8"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7554 16.3734C28.7141 15.4366 28.5625 14.796 28.3455 14.238C28.1215 13.6456 27.7771 13.1186 27.3292 12.6778C26.8883 12.23 26.3543 11.8822 25.7721 11.6652C25.2106 11.4482 24.5733 11.2966 23.6363 11.2553C22.6924 11.2105 22.3927 11.2002 20.0019 11.2002C17.6112 11.2002 17.3115 11.2105 16.3744 11.2519C15.4374 11.2932 14.7967 11.4447 14.2386 11.6617C13.6461 11.8856 13.119 12.23 12.6781 12.6778C12.2302 13.1186 11.8823 13.6525 11.6653 14.2346C11.4482 14.796 11.2967 15.4332 11.2553 16.37C11.2105 17.3137 11.2002 17.6133 11.2002 20.0002C11.2002 22.387 11.2105 22.6901 11.2519 23.627C11.2932 24.5638 11.4448 25.2044 11.6618 25.7624C11.8857 26.3548 12.2337 26.8818 12.6781 27.3226C13.119 27.7704 13.653 28.1182 14.2352 28.3352C14.7967 28.5522 15.434 28.7038 16.371 28.7451C17.308 28.7864 17.6077 28.7968 19.9985 28.7968C22.3892 28.7968 22.6889 28.7864 23.626 28.7451C24.563 28.7038 25.2037 28.5522 25.7618 28.3352C26.9434 27.8771 27.8804 26.9438 28.3386 25.7589C28.5556 25.1975 28.7072 24.5604 28.7485 23.6235C28.7899 22.6832 28.8002 22.387 28.8002 19.9968C28.8002 17.6065 28.7968 17.3137 28.7554 16.3734ZM27.1708 23.5615C27.1329 24.4226 26.9882 24.8841 26.8676 25.1941C26.5713 25.9622 25.9616 26.5683 25.1968 26.8645C24.8868 26.9851 24.4183 27.1297 23.5639 27.1676C22.6338 27.209 22.3582 27.2193 20.0088 27.2193C17.6594 27.2193 17.3769 27.209 16.4537 27.1676C15.5924 27.1297 15.1308 26.9851 14.8208 26.8645C14.4384 26.7233 14.0905 26.4995 13.8114 26.2067C13.5186 25.9208 13.2947 25.5764 13.1535 25.1975C13.0329 24.8876 12.8882 24.4191 12.8503 23.565C12.809 22.635 12.7986 22.3595 12.7986 20.0105C12.7986 17.6616 12.809 17.3791 12.8503 16.4561C12.8882 15.595 13.0329 15.1335 13.1535 14.8235C13.2913 14.4378 13.5152 14.0933 13.8114 13.8109C14.0974 13.5182 14.4418 13.2943 14.8208 13.1531C15.1308 13.0325 15.5993 12.8879 16.4537 12.85C17.3838 12.8086 17.6594 12.7983 20.0088 12.7983C22.3617 12.7983 22.6407 12.8086 23.5639 12.85C24.4252 12.8879 24.8868 13.0325 25.1968 13.1531C25.5792 13.2943 25.9271 13.5182 26.2062 13.8109C26.499 14.0968 26.7229 14.4412 26.8642 14.8235C26.9847 15.1335 27.1294 15.6019 27.1673 16.4561C27.2087 17.386 27.219 17.6616 27.219 20.0105C27.219 22.3595 27.2121 22.6316 27.1708 23.5615ZM20.0019 15.4814C17.5043 15.4814 15.4787 17.5067 15.4787 20.0037C15.4787 22.5008 17.5043 24.526 20.0019 24.526C22.4994 24.526 24.525 22.5008 24.525 20.0037C24.525 17.5067 22.4994 15.4814 20.0019 15.4814ZM20.0019 22.9348C18.3828 22.9348 17.0668 21.6225 17.0668 20.0003C17.0668 18.378 18.3793 17.0658 20.0019 17.0658C21.621 17.0658 22.9369 18.378 22.9369 20.0003C22.9369 21.6225 21.6244 22.9348 20.0019 22.9348ZM24.7077 16.3559C25.2898 16.3559 25.7618 15.8841 25.7618 15.302C25.7618 14.7199 25.2864 14.2446 24.7077 14.2481C24.1255 14.2481 23.6535 14.7199 23.6535 15.302C23.6535 15.8841 24.1255 16.3559 24.7077 16.3559Z" fill="white"></path>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <footer className=" right-0 bottom-0 lg:py-8">
                <p className="font-bold mb-1 text-white">Developer by Derifta</p>
                <p className='text-white'>Desta Arifta (Full Stack Developer)</p>
            </footer>
            </section>
           
        </main>
    );
}

export default Home;    