import React, { useState } from 'react';

const Split = ({ text }) => {
    const [showMore, setShowMore] = useState(false);
    const truncatedText = showMore ? text : text.slice(0, 300) + "...";

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div>
            <p>{truncatedText}</p>
            {showMore ? (
                <button onClick={toggleShowMore} className='font-bold text-blue-800 font-mono' >Show Less</button>
            ) : (
                <button onClick={toggleShowMore} 
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Read More</button>
            )}
        </div>
    );
};

export default Split;
