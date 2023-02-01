import React from 'react';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';
import foto_profile from '../Assets/Desta-Arifta.jpg';
import Sosmed from '../Components/Sosmed';

function Home(props) {
    return (
        <div>
            <div className='pb-12'>
                <Navbar />
            </div>
            <div className="animate-fade-in-down container mx-auto bg-black opacity-90 p-4 mt-12">
                <h5 className='text-sm text-bold text-white'>Profile Saya</h5>
                <hr className="w-48 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-yellow-700"></hr>
                <h1 className='text-1xl md:text-4xl text-white'>LEARN MORE ABOUT ME</h1>

                <div class="columns-2 md:hidden my-5">
                    <div>
                        <img src={foto_profile} alt='Desta Arifta' />
                    </div>
                    <div>
                        <h1 className='text-2xl my-2 text-white text-[#18d26e]'>Full Stack Developer</h1>
                        <p className='text-white'>Semakin kamu berbicara tentang hal-hal negatif dalam hidup, maka kamu akan semakin memiliki pikiran negatif. Bicaralah kemenangan bukan kekalahan.</p>
                    </div>
                </div>

                <div class="columns-1 md:hidden my-5">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="my-2">
                            <p className='text-white '> Tempat/ tanggal lahir:<br /> Semarang, 1 Desembe 1984</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>Umur:<br /> 38</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>Agama:<br /> Islam</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>Status:<br /> Berkeluarga</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>Jenis Kelamin:<br /> Laki-laki</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>Website:<br /> https://derifta.com</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>Phone:<br /> +62 857 7531 2667</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>Email:<br /> desta.arifta@gmail.com</p>
                        </div>
                        <div className="my-2">
                            <p className='text-white'>City:<br /> Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <p className='text-white my-5'>
                        Berpengalaman lebih dari 9 tahun bekerja dalam beberapa perusahaan besar. Saya sudah memiliki pengalaman dan pemahaman yang kuat tentang kerja team, individu maupun dalam mengelola team untuk target yang diinginkan user.
                    </p>
                    <p className='text-white my-5'>
                        Pencapaian terbesar termasuk meningkatkan perusahaan lebih maju sudah terbukti dalam 8 tahun kerja dalam satu perusahaan sebagai leadership divisi IT.</p>
                    <Sosmed />
                </div>

                <div className="hidden md:grid grid-cols-3 gap-2 my-8">
                    <div>
                        <img className='p-8' src={foto_profile} alt='Desta Arifta' />
                    </div>
                    <div className="col-span-2 m-5">
                        <h1 className='text-4xl my-5 text-white text-[#18d26e]'>Full Stack Developer</h1>
                        <h3 className='text-1xl text-white'>Semakin kamu berbicara tentang hal-hal negatif dalam hidup, maka kamu akan semakin memiliki pikiran negatif. Bicaralah kemenangan bukan kekalahan.</h3>
                        <hr className='my-3' />
                        <div className="grid grid-cols-2 gap-2">
                            <div className="my-2">
                                <p className='text-white '> Tempat/ tanggal lahir:<br /> Semarang, 1 Desembe 1984</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>Umur:<br /> 38</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>Agama:<br /> Islam</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>Status:<br /> Berkeluarga</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>Jenis Kelamin:<br /> Laki-laki</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>Website:<br /> https://derifta.com</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>Phone:<br /> +62 857 7531 2667</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>Email:<br /> desta.arifta@gmail.com</p>
                            </div>
                            <div className="my-2">
                                <p className='text-white'>City:<br /> Jakarta, Indonesia</p>
                            </div>
                        </div>
                        <p className='text-white my-5'>
                            Berpengalaman lebih dari 9 tahun bekerja dalam beberapa perusahaan besar. Saya sudah memiliki pengalaman dan pemahaman yang kuat tentang kerja team, individu maupun dalam mengelola team untuk target yang diinginkan user.
                        </p>
                        <p className='text-white my-5'>
                            Pencapaian terbesar termasuk meningkatkan perusahaan lebih maju sudah terbukti dalam 8 tahun kerja dalam satu perusahaan sebagai leadership divisi IT.</p>
                        <Sosmed />

                    </div>



                </div>

                <div>
                    <h5 className='text-sm text-bold text-white'>SKILLS Frontend</h5>
                    <hr className="w-48 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-yellow-700"></hr>
                    <div className="grid grid-cols-2 gap-2 my-8">
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">HTML</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 level h-2.5 rounded dark:bg-green-500 w-11/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">9.3</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">CSS</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-10/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.7</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Boostrap 5</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-11/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.5</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Tailwind</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-10/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">7.8</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">JavaScript</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-9/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">7.6</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">React</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-10/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.1</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Cakra</dt>
                                {/* <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-7/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">6.8</span>
                                </dd> */}
                            </dl>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='text-sm text-bold text-white'>SKILLS Engine</h5>
                    <hr className="w-48 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-yellow-700"></hr>
                    <div className="grid grid-cols-2 gap-2 my-8">
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Wordpress</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 level h-2.5 rounded dark:bg-green-500 w-10/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.3</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Expression Engine ver.5</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-11/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">9.3</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">WIX</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-10/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.5</span>
                                </dd> */}
                            </dl>

                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='text-sm text-bold text-white'>SKILLS Support</h5>
                    <hr className="w-48 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-yellow-700"></hr>
                    <div className="grid grid-cols-2 gap-2 my-8">
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Hardware</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 level h-2.5 rounded dark:bg-green-500 w-10/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.3</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Software</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-10/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.7</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Networking</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-11/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.5</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Installasi</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-10/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">7.8</span>
                                </dd> */}
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">CCTV</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-9/12" ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">7.6</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Telepon PABX</dt>
                                {/* <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-10/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.1</span>
                                </dd> */}
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Server VPS / Hosting</dt>
                                {/* <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-green-600 h-2.5 rounded dark:bg-green-500 w-11/12"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
                                </dd> */}
                            </dl>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Home;