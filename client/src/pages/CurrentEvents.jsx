import React from 'react';
import { Link } from 'react-router-dom';
import Split from '../components/Split';

export default function CurrentEvents() {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-16 '>Current Events</h1>
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
                        <img className="rounded-t-lg w-full object-fill" src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/433314083_885035906966084_7366557022753243456_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=97RhJQbQN8UAb4VbyZF&_nc_ht=scontent.fccu4-3.fna&oh=00_AfAz8vIsxdWXh9KOS2oYQccj0Yo5d0kln1my2uyL0TRV4g&oe=661B1896" alt="img" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Phoenix - Techno-Management Fest of FIEM</h5>
                        </Link>
                        <p className="text-gray-500 text-sm">
                            <Split text="Xplorica presents Phoenix, the official annual techno-management festival. Having grown exponentially since its nascent years, phoenix witnesses nearly a thousand footfall everyday, including participation from various colleges of West Bengal. Phoenix organises a wide range of events catering to the sectors of engineering, basic sciences, management as well as humanities subjects. There is a plethora of technical, non-technical, gaming and management events like robotics, debate, coding and marketing. The special attractions being the carnival events including vr gaming, zorb fight and archery." />
                        </p>
                        {/* <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link> */}
                    </div>
                </div>
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg w-full" src="https://scontent.fccu4-2.fna.fbcdn.net/v/t1.6435-9/58444030_2642163699131374_4124874453500821504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KZLvAm-Wm_kAX9zWm0y&_nc_ht=scontent.fccu4-2.fna&oh=00_AfC8mwY1ywhQspz-sz-Q2BC6hiY41sWtc_jepiaXnR0wZQ&oe=663240C2" alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Flames - Cultural Fest of FIEM</h5>
                        </Link>
                        <p className="text-gray-500 text-sm">
                            <Split text="The annual cultural fest of FIEM, meticulously orchestrated by Culrav, is poised to deliver an unparalleled experience that transcends the ordinary. With eager anticipation, the organizers await the arrival of all participants, ready to embrace the collective spirit of celebration. Envision a gathering where the air pulsates with the rhythm of dance performances, resonates with melodious singing competitions, and reverberates with the energy of diverse musical bands. Picture fashion events showcasing the latest trends, electrifying beatboxing battles, and a plethora of other captivating activities that promise to captivate the senses and ignite the imagination. As the curtains rise on this grand spectacle, prepare to be flabbergasted in ways beyond measure, as the festivity unfolds to reveal a tapestry of cultural richness and artistic brilliance." />
                        </p>

                    </div>
                </div>
            </div>

            <div className='flex justify-center my-8 gap-6' >
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg w-full" src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/346858138_2906005876202164_9202813326243621022_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Hksko8VQR8AAb6RlF56&_nc_oc=AdhKUUaiZqwz0PHuMsI4mq7WLgqyMvGTimxPd8qRLiYRz5n8MiyJ_L-Mf9UWxsw9Gt0&_nc_ht=scontent.fccu4-3.fna&oh=00_AfBOXizZ7NBlwbdcm0K4FVNqnNCvEKiffdMhxCw1pSHE-A&oe=661AFFF4" alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Celluloid - Film Fest of FEIM</h5>
                        </Link>
                        <p className="text-gray-500 text-sm">
                            <Split text="Celluloid, the eagerly anticipated annual film fest of FIEM, brought to life by the esteemed Estrella Productions, promises to be the epitome of cinematic splendor you've long awaited. Three exhilarating days packed with non-stop entertainment, each moment brimming with excitement, laughter, and jubilation, culminating in the grand finale, the much-awaited Cellestra extravaganza! Prepare to be dazzled by a lineup of captivating events that will ignite your passion for cinema, including gripping drama contests that showcase the raw talent and creativity of aspiring filmmakers. As the spotlight shines bright, brace yourself for the arrival of esteemed celebrities who will grace the occasion with their presence, adding an extra touch of glamour and grandeur to the festivities.So gear up for an unforgettable experience filled with lights, camera, and action, as Celluloid unfolds its magic, promising to transport you into a world where dreams come alive on the silver screen." />
                        </p>

                    </div>
                </div>
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg w-full" src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/277463085_1538069726579941_1258381155733053157_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CDIdHdbDJEAAb7H0jw5&_nc_oc=AdjrXwXd70-3ymIlkrjiWrXyRHKqpnm1LbdV6aXWcr9gzI_w5gFVXy6XDZtKGt0Arfc&_nc_ht=scontent.fccu4-3.fna&oh=00_AfD9frxPCnESh4vwHEOy1uFoQetbywnpLykt3Xt6csvDqg&oe=661AF061" alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vibgyor - Sports Fest of FIEM</h5>
                        </Link>
                        <p className="text-gray-500 text-sm">
                            <Split text="VIBGYOR, the highly anticipated sports fest proudly organized by SPORTIVO, the epitome of athleticism and sportsmanship at FIEM. Prepare yourself for an adrenaline-fueled extravaganza as we bring together a multitude of thrilling events designed to showcase the competitive spirit and camaraderie of our college community. From the swift and strategic maneuvers of badminton to the fierce competition on the cricket pitch, the thunderous cheers echoing from the football field to the intense battles of the mind over the chessboard, VIBGYOR offers a diverse array of sporting challenges to captivate enthusiasts of all kinds. But the excitement doesn't end there! Grab your paddles for intense table tennis matches, summon your strength for the ultimate test of tug-of-war, and experience the exhilaration of spiking and blocking on the volleyball court. And let's not forget the ancient art of kabaddi, where agility, strategy, and teamwork reign supreme. So lace up your sneakers, grab your gear, and get ready to immerse yourself in the thrill of competition at the FIEM sports fest like never before!" />
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
