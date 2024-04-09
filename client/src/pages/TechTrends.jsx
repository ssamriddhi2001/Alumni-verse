import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Split from '../components/Split';



export default function () {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-7'>Technology Trends</h1>
            <div>

                <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                            {/* CARD 1 */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <Link to="#" />
                                <div className="relative">
                                    <Link to="#">
                                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nzv8QUnKAB6F5VmLNf26WmH-CwkUH_9Ofw&usqp=CAU" alt="Sunset in the mountains" />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                        </div>
                                    </Link>

                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <Link to="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Generative AI</Link>
                                    <p className="text-gray-500 text-sm">
                                        <Split text="Generative AI or generative artificial intelligence refers to the use of AI to create new content, like text, images, music, audio, and videos Generative AI works by using an ML model to learn the patterns and relationships in a dataset of human-created content. The most common way to train a generative AI model is to use supervised learning - the model is given a set of human-created content and corresponding labels. It then learns to generate content that is similar to the human-created content and labeled with the same labels." />

                                    </p>
                                </div>

                            </div>
                            {/* CARD 2 */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <Link to="#" />
                                <div className="relative">
                                    <Link to="#">
                                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5n1JD4X6d7hC9w1wwh6QZNqEFfUIvy_xpA&usqp=CAU" alt="Sunset in the mountains" />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                        </div>
                                    </Link>

                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <Link to="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Blockchain</Link>
                                    <p className="text-gray-500 text-sm">
                                        <Split text="Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network. A blockchain database stores data in blocks that are linked together in a chain. The data is chronologically consistent because you cannot delete or modify the chain without consensus from the network. As a result, you can use blockchain technology to create an unalterable or immutable ledger for tracking orders, payments, accounts, and other transactions. The system has built-in mechanisms that prevent unauthorized transaction entries and create consistency in the shared view of these transactions." />
                                    </p>
                                </div>

                            </div>
                            {/* CARD 3 */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <Link to="#" />
                                <div className="relative">
                                    <Link to="#">
                                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuSef4m3EAg1gqAMGmSCd9NE6CZK-hSix_g&usqp=CAU" alt="Sunset in the mountains" />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                        </div>
                                    </Link>

                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <Link to="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">Internet of Things IOT
                                    </Link>
                                    <p className="text-gray-500 text-sm">
                                        <Split text="The term IoT, or Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves.
                                        IoT devices are not limited to computers or machinery. The Internet of Things can include anything with a sensor that is assigned a unique identifier (UID). The primary goal of the IoT is to create self-reporting devices that can communicate with each other (and users) in real time." />
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                            {/* CARD 1 */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <Link to="#" />
                                <div className="relative">
                                    <Link to="#">
                                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DUVogJYiMt9r427YDZD1Dg5_Ix49mKUNPw&usqp=CAU" alt="Sunset in the mountains" />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                        </div>
                                    </Link>

                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <Link to="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Space tech</Link>
                                    <p className="text-gray-500 text-sm">
                                        <Split text="In 2024, humanity will be preparing to return to the moon. This renewed interest in space technologies aims to drive scientific discoveries and help solve the earth’s most critical challenges, including the monitoring of climate risks and disasters, better access to telecommunications, as well as defense and sovereignty. The New Space Age is driven not just by government agencies, but also by private actors, from startups to corporations, and is supported by various technologies such as 5G, advanced satellite systems, big data, quantum computing, etc. In 2024, this should accelerate innovation and support very promising technology projects in the field of sustainable spacecraft propulsion (either electric or nuclear) and new Low Earth Orbit constellations for seamless communications and quantum cryptography." />
                                    </p>
                                </div>

                            </div>
                            {/* CARD 2 */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <Link to="#" />
                                <div className="relative">
                                    <Link to="#">
                                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccmtPPoA-IPbXWprpVpxbAp3FsoQxQ0_4kg&usqp=CAU" alt="Sunset in the mountains" />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                        </div>
                                    </Link>

                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <Link to="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Full Stack Development </Link>
                                    <p className="text-gray-500 text-sm">
                                        <Split text="Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application. Full stack web developers have the ability to design complete web applications and websites. They work on the frontend, backend, database and debugging of web applications or websites." />
                                    </p>
                                </div>

                            </div>
                            {/* CARD 3 */}
                            <div className="rounded overflow-hidden shadow-lg flex flex-col">
                                <Link to="#" />
                                <div className="relative">
                                    <Link to="#">
                                        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJkmfl7xHgcnwztVn0krfZ1RZTFOZq5DNIg&usqp=CAU" alt="Sunset in the mountains" />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                        </div>
                                    </Link>

                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <Link to="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">Cybersecurity
                                    </Link>
                                    <p className="text-gray-500 text-sm">
                                        <Split text="Cybersecurity refers to any technology, measure or practice for preventing cyberattacks or mitigating their impact.

Cybersecurity aims to protect individuals’ and organizations’ systems, applications, computing devices, sensitive data and financial assets against computer viruses, sophisticated and costly ransomware attacks, and more." />

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
