import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/lg_navbar.png';
import 'flowbite';
import Sosmed from '../Components/Sosmed';

function Navbar() {
    return (
        <div>
            {/* <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 bg-black">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    
                    <a className="flex items-center">
                        <img className='mr-5' src={logo}/>
                        <h3 className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Desta Arifta</h3>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-white md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/About" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link to="/Resume" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</Link>
                            </li>
                            <li>
                                <Link to="/Photos" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Photos</Link>
                            </li>
                            <li>
                                <Link to="/Portfolio" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            {/* <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 bg-black  ">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <a className="flex items-center">
                        <img className='mr-5' src={logo} />
                        <h3 className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Desta Arifta</h3>
                    </a>

                    <button data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent text-white md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/About" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link to="/Resume" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</Link>
                            </li>
                            <li>
                                <Link to="/Photos" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Photos</Link>
                            </li>
                            <li>
                                <Link to="/Portfolio" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div id="extralarge-modal" tabindex="-1" class=" fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full">
                        <div class="relative w-full h-full max-w-7xl md:h-auto ">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-3 border-b rounded-t dark:border-gray-600">
                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-1 space-y-1">
                                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                        <li>
                                            <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-white md:p-0 dark:text-white" aria-current="page">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/About" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/Resume" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</Link>
                                        </li>
                                        <li>
                                            <Link to="/Photos" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Photos</Link>
                                        </li>
                                        <li>
                                            <Link to="/Portfolio" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link to="/Contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <hr></hr>
                                <div className='py-5'>
                                <Sosmed />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </nav> */}


            <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 opacity-95">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <a className="flex items-center">
                        <img className='mr-5' src={logo} />
                        <h3 className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Desta Arifta</h3>
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-white md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/About" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link to="/Resume" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</Link>
                            </li>
                            <li>
                                <Link to="/Photos" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My hobby</Link>
                            </li>
                            <li>
                                <Link to="/Portfolio" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>


        </div>
    );
}

export default Navbar;