import React, { useState, useEffect } from 'react';

function Typewriter() {
    const words = ["Welcome to AlumniVerse"];
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const type = () => {
            setCurrentWord(words[i]);
            if (isDeleting) {
                setJ(prevJ => prevJ - 1);
                if (j === 0) {
                    setIsDeleting(false);
                    setI(prevI => (prevI + 1) % words.length);
                }
            } else {
                setJ(prevJ => prevJ + 1);
                if (j === currentWord.length) {
                    setIsDeleting(true);
                }
            }
        };

        const interval = setInterval(type, 200);
        return () => clearInterval(interval);
    }, [i, j, isDeleting, currentWord, words]);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <h1 id="typewriter" className="text-6xl font-mono  font-bold">{currentWord.substring(0, j)}</h1>
        </div>
    );
}

export default Typewriter;
