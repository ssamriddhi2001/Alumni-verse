import React from 'react';
import { Link } from 'react-router-dom';
import CardCarousel from '../components/CardCarousel';





export default function AlumniConnect() {

    return (
        <div>
            {/* <h1 className='text-3xl font-semibold text-center my-7'>Alumni Connect</h1> */}

            {/* front section starts */}
            <div>
                <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mb-28">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                Connect with the Alumni
                            </h2>

                            <p className=" text-gray-500 md:mt-4 md:block">
                                Want to enhance your connection? You are at the right place! 
                            </p>
                            <p className=" text-gray-500 ">
                                You are at the right place! This page contains a list of Alumni of Information Technology Department working at various esteemed IT Industries.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <Link
                                    to="/"
                                    className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring "
                                >
                                    Get Started Today
                                </Link>
                            </div>
                        </div>
                    </div>

                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover sm:h-full"
                    />
                </section>
            </div>
            {/* front section ends */}

            <CardCarousel />

            {/* review slider starts */}



            {/* review slider ends */}

            {/* <div className='flex items-center justify-center gap-8 p-6'>
                <div className='max-w-lg ' >
                    <Link
                        to="#"
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                        <span
                            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                    Building a SaaS product as a software developer
                                </h3>

                                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                            </div>

                            <div className="hidden sm:block sm:shrink-0">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-16 rounded-lg object-cover shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                                maiores deleniti consectetur nobis et eaque.
                            </p>
                        </div>

                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Published</dt>
                                <dd className="text-xs text-gray-500">31st June, 2021</dd>
                            </div>

                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                <dd className="text-xs text-gray-500">3 minute</dd>
                            </div>
                        </dl>
                    </Link>
                </div>

                <div className='max-w-lg ' >
                    <Link
                        to="#"
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                        <span
                            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                    Building a SaaS product as a software developer
                                </h3>

                                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                            </div>

                            <div className="hidden sm:block sm:shrink-0">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-16 rounded-lg object-cover shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                                maiores deleniti consectetur nobis et eaque.
                            </p>
                        </div>

                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Published</dt>
                                <dd className="text-xs text-gray-500">31st June, 2021</dd>
                            </div>

                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                <dd className="text-xs text-gray-500">3 minute</dd>
                            </div>
                        </dl>
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-center gap-8 p-6'>

                <div className='max-w-lg ' >
                    <Link
                        to="#"
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                        <span
                            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                    Building a SaaS product as a software developer
                                </h3>

                                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                            </div>

                            <div className="hidden sm:block sm:shrink-0">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-16 rounded-lg object-cover shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                                maiores deleniti consectetur nobis et eaque.
                            </p>
                        </div>

                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Published</dt>
                                <dd className="text-xs text-gray-500">31st June, 2021</dd>
                            </div>

                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                <dd className="text-xs text-gray-500">3 minute</dd>
                            </div>
                        </dl>
                    </Link>
                </div>
                <div className='max-w-lg ' >
                    <Link
                        to="#"
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                        <span
                            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                    Building a SaaS product as a software developer
                                </h3>

                                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                            </div>

                            <div className="hidden sm:block sm:shrink-0">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-16 rounded-lg object-cover shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                                maiores deleniti consectetur nobis et eaque.
                            </p>
                        </div>

                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Published</dt>
                                <dd className="text-xs text-gray-500">31st June, 2021</dd>
                            </div>

                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                <dd className="text-xs text-gray-500">3 minute</dd>
                            </div>
                        </dl>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}
