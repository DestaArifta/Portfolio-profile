import React from 'react';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';

function Resume(props) {
    return (
        <div>
            <div className='pb-12'>
                <Navbar />
            </div>
            <div className="animate-fade-in-down container mx-auto bg-black opacity-90 p-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
                    <div className=' mx-5'>
                        <div className='mb-8'>
                            <h5 className='text-sm text-bold text-white'>PENDIDIKAN</h5>
                            <hr className="w-48 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-yellow-700"></hr>
                            <h1 className='text-4xl text-white text-bold'>PENDIDIKAN FORMAL</h1>
                        </div>
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1993 – 1999</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SD Badan Wakaf 1-3 Sultan Agung, Semarang</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">SD Islam Sultan Agung 3 merupakan salah satu sekolah besar di semarang dan salah satu sekolah islam yang menjadi pelopor sekolah - sekolah islam yang lain di kota Semarang. SD Islam Sultan Agung 3 adalah sekolah Islam di bawah naungan Yayasan Badan Wakaf Sultan Agung ( YBWSA ) Semarang yang juga merupakan salah satu yayasan besar di kota Semarang.</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1999 – 2002</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SMP Kesatrian 2, Semarang</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">SMP Ksatrian 2 adalah sekolah swasta nasional yang memiliki visi “Unggul Dalam Prestasi Berdasarkan Iman dan Takwa serta Kedisiplinan.” Didirikan pada Juni 1987 oleh Yayasan Pendidikan Ksatrian 67.</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2002 – 2005</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SMA Masehi 3 PSAK, Semarang</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">SMA Masehi 3 PSAK Semarang berdiri sejak tahun 1990 dibawah naungan Yayasan Pengampu Sekolah dan Asrama Kristen (PSAK) beralamatkan di Jl. Imam Bonjol 138 Semarang, Jawa Tengah. Saat ini SMA Masehi 3 PSAK Semarang dipimpin oleh Bapak Drs. Hono Hadi Prasetyo yang telah berpengalaman dalam menjabat kepala sekolah di sekolah-sekolah Yayasan PSAK.</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2006 – 2010</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Universitas Dian Nuswantoro, Semarang</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Universitas Dian Nuswantoro adalah universitas swasta yang didirikan oleh Yayasan Dian Nuswantoro Semarang. Yayasan ini awalnya menaungi beberapa sekolah tinggi, yaitu Sekolah Tinggi Manajemen Informatika dan Komputer, Sekolah Tinggi Ilmu Ekonomi, Sekolah Tinggi Bahasa Asing, dan Sekolah Tinggi Kesehatan yang seluruhnya resmi bergabung menjadi Universitas Dian Nuswantoro pada tahun 1990. Dalam penggabungan tersebut, STMIK menjadi Fakultas Ilmu Komputer, STIE menjadi Fakultas Ekonomi, STBA menjadi Fakultas Bahasa dan Sastra, STKes menjadi Fakultas Kesehatan, dan ditambah satu fakultas baru yaitu Fakultas Teknik.</p>
                            </li>
                        </ol>
                    </div>
                    <div className=' mx-5'>
                        <div className='mb-8'>
                            <h5 className='text-sm text-bold text-white'>HISTORI</h5>
                            <hr className="w-48 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-yellow-700"></hr>
                            <h1 className='text-4xl text-white text-bold'>PENGALAMAN KERJA</h1>
                        </div>
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2010 – 2011</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PT Virtual Media Nusantara / Virtual Consulting</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ea dicta facilis pariatur quisquam rem veritatis. Neque sunt quis, quo voluptatum placeat, deserunt repellat ducimus magnam magni asperiores corrupti?</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2011 –2012</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PT. Virtual Media Nusantara / Virtual Consulting</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quibusdam impedit libero rerum veritatis similique dolores! Illum, sit, itaque reiciendis quas, id dolorum temporibus tempora modi repellendus sunt nam cumque?</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015 - </time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Astronacci International</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, repellat quos consequuntur officia molestiae dolor doloribus vero iste facilis similique, quibusdam, nam a quisquam cumque magnam facere ullam odio. Laborum?</p>
                            </li>

                        </ol>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Resume;