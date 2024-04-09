import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide"
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
// import {  } from "react-icons/fa";

export default function CardCarousel() {
    useEffect(() => {
        const slider = new Glide(".glide-04", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3500,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <>
            {/*<!-- Component: Carousel with controls outside --> */}
            <div className="glide-04 relative w-full">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Sarfaraz Ahmad</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/D4D03AQGRytD8K3D0HQ/profile-displayphoto-shrink_800_800/0/1677259928786?e=1718236800&v=beta&t=ZU86yapxBeOw5d3g4BrHfgyoP1LqPX1YPu-RXuGv7gM"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department1
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/sarfaraz-ahmad-647898209/">
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Pratik Vaibhav</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/D5603AQEfJgQemrRngw/profile-displayphoto-shrink_800_800/0/1711771904009?e=1718236800&v=beta&t=ouQcJ03_iAunktjZzO95taM_0GAUbHm8SvUzU-7eE98"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/pratik-vaibhav-ab79781a0/" >
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Annapurna Sharma</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/D4D03AQHNEjw0xURhCQ/profile-displayphoto-shrink_800_800/0/1698218908106?e=1718236800&v=beta&t=H6IAxbjBzxz4xq-32T2KZ9QI32UoO7r7lxO-POxuSXc"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link className="https://www.linkedin.com/in/annapurna-sharma-574455221/" >
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Janhavi Ojha</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/C4D03AQEOgh_fX98Zgw/profile-displayphoto-shrink_800_800/0/1628046885441?e=1718236800&v=beta&t=iMFxx4PoOH0CG9KsZvG3RP2gbTle_ZU-LX0XAyfmiGI"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/janhavi-ojha/" >
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Samridhi Kumari</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/D5603AQEwpGpVzGVBZg/profile-displayphoto-shrink_800_800/0/1709608589156?e=1718236800&v=beta&t=DZBYzBfSmXQEQ8Pdxp7ZKAgE_zahyqfnQeHktN9O8mY"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/samridhi-kumari-31b429210/" >
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Sweta Shekha</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/D4D03AQGcTWIcwvrfpQ/profile-displayphoto-shrink_800_800/0/1698599840188?e=1718236800&v=beta&t=QoqidVFJAdswgSmSKZVjKHgun1p0xvtE4yAQ7oXeA70"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/sweta-shekha-2b599a1bb/" >
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Debdip Sarkar</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/C4D03AQEEw3HGNvpWng/profile-displayphoto-shrink_800_800/0/1661026761194?e=1718236800&v=beta&t=wmJT1SGm24WlFAIirszh-bICnBNTgroYu8xUcrdKmBw"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/debdip-sarkar-18a4b91b1/">
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Shraddha Shaw</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/C4D03AQHl5nuYpvnj0Q/profile-displayphoto-shrink_800_800/0/1594074790967?e=1718236800&v=beta&t=Yxc6EaSLguToTR2VqC9MSGsdT3jABFFBqp20ILC1m1A"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/shraddha-shaw-7719751b1/">

                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Rahul Kumar Ranjan</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/D4D03AQF7OomLFaKaOA/profile-displayphoto-shrink_800_800/0/1692161971469?e=1718236800&v=beta&t=GA5o3EEr5uYTBI1xFmIRoFJwSft9ke2MMtpmp7Fblf4"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/rahulkranjan/" >
                                                <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>
                        <li>
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
                                                Data Engineer at Cognizant
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Vishal Nayek</p>
                                        </div>

                                        <div className="hidden sm:block sm:shrink-0">
                                            <img
                                                alt="img"
                                                src="https://media.licdn.com/dms/image/D4D35AQHwJC_JbRiVrQ/profile-framedphoto-shrink_800_800/0/1677311272831?e=1713276000&v=beta&t=ow4M68KbAdVZgTAp1rbWAAJz0f9TO4UreVul3ehbxd0"
                                                className="size-16 rounded-lg object-cover shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            Batch 2022 passout of IT department
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6 text-center items-center justify-center ">
                                        <div className="flex text-xl">
                                            <Link to="https://www.linkedin.com/in/vishal-nayek-41ba18190/" >
                                            <FaLinkedin />
                                            </Link>
                                        </div>

                                        <div className="flex flex-row gap-2 text-xl text-center items-center justify-center ">
                                            <FaWhatsappSquare />
                                            <p className="font-mono" >9834xxxxxx</p>
                                        </div>
                                    </dl>
                                </Link>
                            </div>
                        </li>


                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                    className="flex w-full items-center justify-center gap-2 p-4"
                    data-glide-el="controls"
                >
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>prev slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>next slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/*<!-- End Carousel with controls outside --> */}
        </>
    )
}
