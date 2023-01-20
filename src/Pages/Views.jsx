import React from 'react';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';

function Views(props) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="animate-fade-in-down container ner mx-auto bg-black opacity-90 p-4 mt-5">
                <h5 className='text-sm text-bold text-white'>View Photos</h5>
                <hr className="w-48 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-yellow-700"></hr>
                <h1 className='text-4xl text-white text-bold'>MY WORKS</h1>

                <div>
                    
                </div>
                <div className="grid grid-cols-3 gap-8 my-8">
                    
                </div>
            </div>
        </div>

    );
}

export default Views;