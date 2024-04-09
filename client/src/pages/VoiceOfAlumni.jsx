import React from 'react'

export default function VoiceOfAlumni() {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-7'>Here's what our Alumni said</h1>

            <div>

                <div className="pb-5">
                    {/* <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
                        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">Testimonials</div>
                        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"> customers said</h2>
                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers.</p>
                    </div> */}
                    <div className="container p-6 mx-auto mb-10 xl:px-0">
                        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                            <div className="lg:col-span-2 xl:col-auto">
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                                    <p className="text-2xl leading-normal">Share athat hits some of your benefits from one of your popular customer.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Sarah Steiner</div>
                                            <div className="text-gray-600 dark:text-gray-400">VP Sales at Google</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className>
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                                    <p className="text-2xl leading-normal">Make sure you only pick the to keep it short and simple.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&crop=faces&fit=crop&w=100&h=100&q=80" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Dylan Ambrose</div>
                                            <div className="text-gray-600 dark:text-gray-400">Lead marketer at Netflix </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className>
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                                    <p className="text-2xl leading-normal">This is an seen. I would use this for anything.</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&crop=faces&q=80" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Gabrielle Winn</div>
                                            <div className="text-gray-600 dark:text-gray-400">Co-founder of Acme Inc</div>
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
