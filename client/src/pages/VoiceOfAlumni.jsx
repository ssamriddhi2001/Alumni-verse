import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.png'

export default function VoiceOfAlumni() {
    return (
        <div>

            <div>
                {/* <div>
                    <section className="flex items-center justify-center bg-gray-50 sm:grid sm:grid-cols-2 mb-28">

                       
                        <div>

                            <img
                                alt="img"
                                src={img1}
                                className="object-cover "
                            />
                        </div>


                        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    Here's what our Alumni said
                                </h2>

                                <p className=" text-gray-500 md:mt-4 md:block">
                                    Want to enhance your connection? You are at the right place!
                                </p>
                                <p className=" text-gray-500 ">
                                    You are at the right place! This page contains a list of Alumni of Information Technology Department working at various esteemed IT Industries.
                                </p>


                            </div>
                        </div>
                    </section>
                </div> */}

                <div className="sm:flex items-center max-w-screen">
                    <div className="sm:w-1/2 p-10">
                        <div className="image object-center text-center">
                            <img
                                alt="img"
                                src={img1}

                            />
                        </div>
                    </div>
                    <div className="sm:w-1/2 p-10">
                        <div className="">
                            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span> */}

                            <p className=" text-gray-500">
                                Explore the insights of our alumni as they delve into the latest technology trends shaping the IT industry.
                            </p>
                            <p className=" text-gray-500 ">
                                Join us on this journey of exploration and discovery, where alumni share their perspectives on the ever-evolving world of IT.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-center my-10">
                    Here's what our Alumni said
                </h2>
                <div className="pb-5">
                    <div className="container p-6 mx-auto mb-10 xl:px-0">
                        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                            <div className="lg:col-span-2 xl:col-auto">
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800 hover:bg-gray-200">
                                    <p className="text-2xl leading-normal">Technology is best when it brings people together.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://media.licdn.com/dms/image/D4D03AQGRytD8K3D0HQ/profile-displayphoto-shrink_800_800/0/1677259928786?e=1718236800&v=beta&t=ZU86yapxBeOw5d3g4BrHfgyoP1LqPX1YPu-RXuGv7gM" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Sarfaraz Ahmad</div>
                                            <div className="text-gray-600 dark:text-gray-400">Data Engineer at Cognizant</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className>
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800 hover:bg-gray-200">
                                    <p className="text-2xl leading-normal">Any sufficiently advanced technology is indistinguishable from magic.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://media.licdn.com/dms/image/C4D03AQEOgh_fX98Zgw/profile-displayphoto-shrink_800_800/0/1628046885441?e=1718236800&v=beta&t=iMFxx4PoOH0CG9KsZvG3RP2gbTle_ZU-LX0XAyfmiGI" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Janhavi Ojha</div>
                                            <div className="text-gray-600 dark:text-gray-400">Specialist Programmer @Infosys </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className>
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800 hover:bg-gray-200">
                                    <p className="text-2xl leading-normal">Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://media.licdn.com/dms/image/D5603AQEfJgQemrRngw/profile-displayphoto-shrink_800_800/0/1711771904009?e=1718236800&v=beta&t=ouQcJ03_iAunktjZzO95taM_0GAUbHm8SvUzU-7eE98" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Pratik Vaibhav</div>
                                            <div className="text-gray-600 dark:text-gray-400">Salesforce Developer at Cognizant</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-5">

                    <div className="container p-6 mx-auto mb-10 xl:px-0">
                        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                            <div className="lg:col-span-2 xl:col-auto">
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800 hover:bg-gray-200">
                                    <p className="text-2xl leading-normal">The technology you use impresses no one. The experience you create with it is everything.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://media.licdn.com/dms/image/C4D03AQEEw3HGNvpWng/profile-displayphoto-shrink_800_800/0/1661026761194?e=1718236800&v=beta&t=wmJT1SGm24WlFAIirszh-bICnBNTgroYu8xUcrdKmBw" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Debdip Sarkar</div>
                                            <div className="text-gray-600 dark:text-gray-400">Digital Specialist Engineer @Infosys</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className>
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800 hover:bg-gray-200">
                                    <p className="text-2xl leading-normal">For a successful technology, reality must take precedence over public relations, for Nature cannot be fooled
                                    </p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://media.licdn.com/dms/image/D4D03AQF7OomLFaKaOA/profile-displayphoto-shrink_800_800/0/1692161971469?e=1718236800&v=beta&t=GA5o3EEr5uYTBI1xFmIRoFJwSft9ke2MMtpmp7Fblf4" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Rahul Kumar Ranjan</div>
                                            <div className="text-gray-600 dark:text-gray-400">Software Engineer @ K12 Techno Services Pvt. Ltd. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className>
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800 hover:bg-gray-200">
                                    <p className="text-2xl leading-normal">Getting information off the Internet is like taking a drink from a fire hydrant.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://media.licdn.com/dms/image/D4D03AQGcTWIcwvrfpQ/profile-displayphoto-shrink_800_800/0/1698599840188?e=1718236800&v=beta&t=QoqidVFJAdswgSmSKZVjKHgun1p0xvtE4yAQ7oXeA70" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Sweta Shekha</div>
                                            <div className="text-gray-600 dark:text-gray-400">Software Developer @ Wipro</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
