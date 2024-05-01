import React from 'react';
import { Link } from 'react-router-dom';

const jobOpportunity = [
    {
        logo: "https://assets.aboutamazon.com/dims4/default/c1f10ce/2147483647/strip/true/crop/1200x800+0+0/resize/324x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F75%2Fab%2F53dea402445d83406077763cfde7%2Famazon-logo-1200x800.png",
        jobTitle: "Software Development Engineer 2024",
        companyName: "Amazon",
        location: "Bangalore",
        jobType: "Full time",
        jPackage: "10LPA",
        description: "Bachelor's Degree in Computer Science or related field, Proficiency with the tools of the trade, including a variety of modern programming languages (Java, C/C++, Objective C, Python, JavaScript, etc.) and open-source technologies (Linux, Spring, JQuery, etc.)",
        lastDate: "30 May, 2024",
        link: "https://www.amazon.jobs/en"
    },
    {
        logo: "https://scontent.fccu17-1.fna.fbcdn.net/v/t39.8562-6/434191236_1410755556274331_2008438480370203932_n.png?_nc_cat=103&ccb=1-7&_nc_sid=f537c7&_nc_ohc=qURrbaOucQMAb6BwWpp&_nc_ht=scontent.fccu17-1.fna&oh=00_AfBSYtD62Z2fze8DDaiMbeIavoFXSoCNpAn5hnIULzPb2A&oe=662C279E",
        jobTitle: "Software Engineer (Frontend)",
        companyName: "Facebook",
        location: "Mumbai",
        jobType: "Full time",
        jPackage: "15LPA",
        description: "Bachelor's degree in Computer Science, Computer Engineering, relevant technical field, or equivalent practical experience. Experience with React and React Native",
        lastDate: "1 June, 2024",
        link: "https://www.metacareers.com/jobs"
    },
    {
        logo: "https://cdn.iconscout.com/icon/free/png-512/free-microsoft-1868944-1583108.png?f=webp&w=256",
        jobTitle: "Software Development Engineer 2024",
        companyName: "Microsoft",
        location: "Hyderabad",
        jobType: "Full time",
        jPackage: "10LPA",
        description: "Bachelor's Degree in Computer Science; o OR related technical field AND 1+ year(s) technical engineering experience with coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, o OR Python o OR Master's Degree in Computer Science or related technical field with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python o OR equivalent experience.",
        lastDate: "30 May, 2024",
        link: "https://careers.microsoft.com/v2/global/en/home.html"
    },
    {
        logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
        jobTitle: "Software Development Engineer 2024",
        companyName: "Google",
        location: "Bangalore",
        jobType: "Full time",
        jPackage: "20LPA",
        description: "Bachelor's degree or equivalent practical experience. 1 year of experience with software development in one or more programming languages (e.g., Python, C, C++, Java, JavaScript).",
        lastDate: "2 June, 2024",
        link: "https://www.google.com/about/careers/applications/"
    },
    {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgfqxbU8iftrnGXPPbaTBC5E1haFjdPvxf9h-5bKzrw&s",
        jobTitle: "Assistant System Engineer (Fresher) 2024",
        companyName: "TCS",
        location: "Kolkata",
        jobType: "Full time",
        jPackage: "3.36 LPA",
        description: "Bachelor's Degree in Computer Science or related field, Proficiency with the tools of the trade, including a variety of modern programming languages (Java, C/C++, Objective C, Python, JavaScript, etc.) and open-source technologies (Linux, Spring, JQuery, etc.)",
        lastDate: "30 May, 2024",
        link: "https://www.tcs.com/careers/india"
    },

];


export default function ShareOpportunity() {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-7'>Share Opportunity</h1>

            <div>
                <div className='flex flex-col items-center justify-center gap-6 mb-4'>

                    {jobOpportunity.map((item, index) => (
                        <div key={index} className='max-w-4xl shadow-lg ' >

                            <div className="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
                            >
                                <span
                                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                ></span>

                                <div className="sm:flex sm:justify-between sm:gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 sm:text-2xl">
                                            {item.jobTitle}
                                        </h3>

                                        <p className="mt-1 text-lg text-gray-600">{item.companyName}</p>
                                    </div>

                                    <div className="hidden sm:block sm:shrink-0">
                                        <img
                                            alt=""
                                            src={item.logo}
                                            className="size-20 rounded-xl object-contain shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="text-pretty text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                </div>

                                <dl className="mt-6 flex gap-4 sm:gap-6">
                                    <div className="flex flex-col">
                                        <p className='font-semibold text-lg  ' >Location</p>
                                        <p className=' text-sm' >{item.location}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <p className='font-semibold text-lg' >Last Date</p>
                                        <p className=' text-sm'>{item.lastDate}</p>
                                    </div>
                                </dl>
                                <div className='flex items-center justify-end'>
                                    <Link to={item.link}>
                                        <button className='px-4 py-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' >Apply now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
