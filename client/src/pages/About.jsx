import React from 'react';
import { Link } from 'react-router-dom';
import { PiChatsFill, PiStudentFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";



export default function About() {
  return (
    <div>
      {/* <h1 className='text-3xl font-semibold text-center my-7'>About us</h1> */}
      <div>

        <div>

          <div className="sm:flex items-center max-w-screen">
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center">
                <img src="https://citl.news.niu.edu/wp-content/uploads/sites/14/2022/02/GettyImages-600057998-800x500.jpg" />
              </div>
            </div>
            <div className="sm:w-1/2 p-10">
              <div className="text">
                {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span> */}
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">AlumniVerse</span>
                </h2>
                <p className="text-gray-700 text-lg">
                  It is a comprehensive platform designed to facilitate efficient communication, networking, and engagement between a college, or organization and its alumni community. The system allows alumni to connect with each other, stay updated with institution-related news, events, and opportunities, and collaborate with current students and faculty.
                </p>
                <br />
                <p className="text-gray-700 text-lg">
                  The primary objective of the "AlumniVerse" project is to create a dynamic and user-centric web application, powered by the robust MERN stack, that serves as a bridge of connectivity and engagement between educational institutions or organizations and their distinguished alumni community.

                </p>
              </div>
            </div>
          </div>


        </div>

        <div className="my-32">
          <div className="items-center flex flex-col text-center justify-center ">
            <div className="col-span-2 mb-8">
              <h2 className="mt-3 mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
                Our Objectives</h2>
              <p className="font-light text-gray-700 text-2xl">
                <span className='underline ' >AlumniVerse </span> - An efficient way to connect with your Alumni
              </p>
              <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              </div>
            </div>
            <div className="flex gap-12 items-center justify-center bg-slate-200 p-16   rounded-lg">
              <div className='text-5xl flex flex-col items-center'>


                <PiChatsFill color='#3471eb' />

                <h3 className="mb-2 text-2xl  dark:text-white">Effective Communication
                </h3>

              </div>
              <div className='text-5xl flex flex-col items-center'>


                <BsFillPeopleFill color='#3471eb' />

                <h3 className="mb-2 text-2xl  dark:text-white">Seamless Networking

                </h3>

              </div>
              <div className='text-5xl flex flex-col items-center'>


                <MdTipsAndUpdates color='#3471eb' />

                <h3 className="mb-2 text-2xl  dark:text-white">Stay Updated

                </h3>

              </div>
              <div className='text-5xl flex flex-col items-center'>


                <PiStudentFill color='#3471eb' />

                <h3 className="mb-2 text-2xl  dark:text-white">Collaborative Learning

                </h3>

              </div>

            </div>
          </div>
        </div>
        {/* 
        <div>
          <section className="min-h-screen  text-center py-10 px-8 xl:px-0 flex flex-col justify-center">

            <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <div className="card bg-gray-800 p-10 relative">
                <div className="circle">
                </div>
                <div className="relative lg:pr-52">
                  <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Saurabh Patel</h2>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames.</p>
                </div>
                <div className="icon" />
              </div>
              <div className="card bg-gray-800 p-10 relative">
                <div className="circle">
                </div>
                <div className="relative lg:pl-48">
                  <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Samriddhi Sharma</h2>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames.</p>
                </div>
              </div>
              <div className="card bg-gray-800 p-10 relative">
                <div className="circle">
                </div>
                <div className="relative lg:pr-44">
                  <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Vivek Kumar Shaw</h2>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames.</p>
                </div>
              </div>
              <div className="card bg-gray-800 p-10 relative">
                <div className="circle">
                </div>
                <div className="relative lg:pl-48">
                  <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Sourojit Das</h2>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames.</p>
                </div>
              </div>
              </div>
              </section>
              
            </div> */}

        <div className='flex flex-col'>


          <h1 className="text-4xl font-semibold mx-auto mb-16 leading-snug">Team Members</h1>


          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-4 bg-white dark:bg-gray-800">
            <figure className="flex flex-col  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-lg w-32 h-32 mb-3 " src="https://media.licdn.com/dms/image/D4D03AQGBBReefbhIKA/profile-displayphoto-shrink_800_800/0/1681826530540?e=1718841600&v=beta&t=cXAtOAaahPJqHCJ5HWjuIALHrZkuJw5Pc3flVf5zlqQ" alt="profile picture" />
              <blockquote className="flex flex-col items-center justify-center  text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white gap-4 ">Saurabh Patel</h3>
                <p className="">Department of IT</p>

                <p className="mb-2 ">Batch 2020-2024</p>
                <div className='flex items-center justify-center gap-10'>
                  <Link to="https://www.linkedin.com/in/saurabh-patel-95368818b/">
                    <FaLinkedin color='#3471eb' className='text-2xl ' />
                  </Link>
                  <Link to="https://github.com/SaurabhPatelgiT">
                    <FaGithub color='black' className='text-2xl ' />
                  </Link>
                </div>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-lg w-32 h-32 mb-3  " src="https://media.licdn.com/dms/image/C4D03AQGzIGBD0IQfjA/profile-displayphoto-shrink_800_800/0/1656504919040?e=1718841600&v=beta&t=7q6-vzUyIMLdbmRnjVB2cwvqEFYwI3BmF86NWOp1eNg" alt="profile picture" />
              <blockquote className="flex flex-col items-center justify-center  text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white gap-4">Samriddhi Sharma</h3>
                <p className="">Department of IT</p>

                <p className="mb-2 ">Batch 2020-2024</p>
                <div className='flex items-center justify-center gap-10'>
                  <Link to="https://www.linkedin.com/in/samriddhisharma19/">
                    <FaLinkedin color='#3471eb' className='text-2xl ' />
                  </Link>
                  <Link to="https://github.com/ssamriddhi2001">
                    <FaGithub color='black' className='text-2xl ' />
                  </Link>
                </div>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-lg w-32 h-32 mb-3  " src="https://media.licdn.com/dms/image/C4E03AQH262XzEEf4Tw/profile-displayphoto-shrink_800_800/0/1636899726460?e=1718841600&v=beta&t=bDhKML_JVs7yc9Z5AEYaoSzKuOSoxrH1wyB4F8_-wlw" alt="profile picture" />
              <blockquote className="flex flex-col items-center justify-center  text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white gap-4">Vivek Kumar Shaw</h3>
                <p className="">Department of IT</p>

                <p className="mb-2 ">Batch 2020-2024</p>
                <div className='flex items-center justify-center gap-10'>
                  <Link to="https://www.linkedin.com/in/vivek-kumar-shaw-46b378216/">
                    <FaLinkedin color='#3471eb' className='text-2xl ' />
                  </Link>
                  <Link to="">
                    <FaGithub color='black' className='text-2xl ' />
                  </Link>
                </div>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8  bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-lg w-32 h-32 mb-4 bg-blue-200  " src="https://media.licdn.com/dms/image/D4D03AQGvDIdpneFFWQ/profile-displayphoto-shrink_400_400/0/1713620861835?e=1719446400&v=beta&t=vPHBPp5hq1oUEtSaFwtyRazeNCzBkZXTHkOYQ9Bg1jY" alt="profile picture" />
              <blockquote className="flex flex-col items-center justify-center px-8 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white gap-4">Sourojit Das</h3>
                <p className="">Department of IT</p>
                <p className="mb-2 ">Batch 2020-2024</p>
                <div className='flex items-center justify-center gap-10'>
                  <Link to="">
                    <FaLinkedin color='#3471eb' className='text-2xl ' />
                  </Link>
                  <Link to="">
                    <FaGithub color='black' className='text-2xl ' />
                  </Link>
                </div>

              </blockquote>
            </figure>

          </div>

        </div>



      </div>
    </div>
  )
}
