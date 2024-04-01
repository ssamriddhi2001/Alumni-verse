import React from 'react';
import { Link } from 'react-router-dom';

export default function CurrentEvents() {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-7'>Current Events</h1>
            {/* <div>
                <section className="section">
                    <div className="container">
                        <div className="section-cards">
                            <div className="section-card">
                                <span>1</span>
                                <h2>card heading</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nam quis consectetur, cupiditate vitae consequatur.</p>
                                <a href="#">read more</a>
                            </div>
                            <div className="section-card">
                                <span>G</span>
                                <h2>Gev Stack</h2>
                                <p><b>Passionate coder</b> 🚀 | Sharing the joy of coding through posts and tutorials 💻 | Join me on this journey to explore the world of programming!</p>
                                <a href="https://www.instagram.com/gevstack/" target="_blank">read more</a>
                            </div>
                            <div className="section-card">
                                <span>3</span>
                                <h2>card heading</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nam quis consectetur, cupiditate vitae consequatur.</p>
                                <a href="#">read more</a>
                            </div>
                        </div>
                    </div>
                </section>

            </div> */}


            <div className='flex justify-center gap-6'>

                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg" src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/433314083_885035906966084_7366557022753243456_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-Tk5HTaitG0AX-wxVh-&_nc_ht=scontent.fccu4-3.fna&oh=00_AfDTdxECyvZCQDRg110_tTCe4QkKkM91Dsu2STk6E3x-iA&oe=66108C96" alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg" src="https://scontent.fccu4-2.fna.fbcdn.net/v/t1.6435-9/58444030_2642163699131374_4124874453500821504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KZLvAm-Wm_kAX9zWm0y&_nc_ht=scontent.fccu4-2.fna&oh=00_AfC8mwY1ywhQspz-sz-Q2BC6hiY41sWtc_jepiaXnR0wZQ&oe=663240C2" alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-6 gap-6' >
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg" src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/346858138_2906005876202164_9202813326243621022_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Thqv-NB-Jd4AX8D27Hz&_nc_oc=AdiQMr90G3OK8aLTD2Fh3-s1TKWg9rmYbfw8xtWeGlKovRx6rwubCmk2p7Ev6evlPyw&_nc_ht=scontent.fccu4-3.fna&oh=00_AfBTu4BAIChCzhg44zesPWVyZMqEZUmmqbvKj7zZnBndyQ&oe=6610AC34" alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg " src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/277576189_1538068969913350_437481183939836383_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ah39WiHqYloAX8ruN-J&_nc_ht=scontent.fccu4-2.fna&oh=00_AfDPhEirb6KfLwG67Tmw2RfyKVd2OltEkovwJ9xX5DyRhg&oe=6610A965" alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
