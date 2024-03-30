import React, { useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { BsCalendar2Event } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const navItems = [
        {
            icons: <BsCalendar2Event />,
            label: "Current events",
            link: "/current-events"
        },
        {
            icons: <BsCalendar2Event />,
            label: "Tech Trends",
            link: "/tech-trends"
        },
        {
            icons: <BsCalendar2Event />,
            label: "Voice of Alumni",
            link: "/voice-of-alumni"
        },
        {
            icons: <BsCalendar2Event />,
            label: "Alumni Connect",
            link: "/alumni-connect"
        },
        {
            icons: <BsCalendar2Event />,
            label: "Share Opportunity",
            link: "/share-opportunity"
        },
    ];

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <div className={`${nav ? 'w-[250px]' : 'w-10'} ml-4 mt-4  h-full bg-slate-800  rounded-xl relative duration-300`}>
                {!nav ? (

                    <div onClick={handleNav} className='flex items-center justify-center text-slate-200  rounded-full text-xl h-9 w-9 absolute' >
                        <TfiMenu />
                    </div>
                ) : (

                    <div onClick={handleNav} className='flex items-center justify-center text-slate-200  rounded-full text-xl h-9 w-9 absolute' >
                        <RxCross2 />
                    </div>
                )
                }
                <div className='pt-10'>
                    <ul className='text-slate-200 flex flex-col gap-2 p-2 '>
                        {navItems.map((item, index) => (
                            <Link to={item.link}>
                                <li key={index} className={`${!nav ? 'p-0' : 'p-2'} flex gap-4 hover:bg-gray-600 rounded-md text-lg `} >
                                    {item.icons}
                                    <span className={`${!nav ? 'hidden' : 'flex'} `} >{item.label}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
