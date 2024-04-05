import React from "react";
import Card from "./Card.jsx";
import ListName from "./ListName.js";

const Hero = () => {
    const nameList = ListName;
    // console.log(nameList);

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const numberOfCards = getRandomNumber(2, 10);

    const cards = [];
    for (let i = 0; i < numberOfCards; i++) {
        const randomIndex = getRandomNumber(0, nameList.length - 1);

        const randomName = nameList[randomIndex];

        cards.push(<Card key={i} name={randomName} />);
    }

    return (
        <div className="py-12 max-w-full">
            <h1 className="px-2 font-bold text-4xl pb-1 text-center text-gray-700 dark:text-white">
                Random Anime
            </h1>
            <p className="pb-6 text-gray-700 dark:text-gray-300 text-sm opacity-70 text-center">
                Fetching from
                <a
                    className="text-cyan-400 hover:underline pl-1"
                    href="https://github.com/Nandaxy/my-api-v2"
                >
                    my-api-v2
                </a>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {cards}
            </div>
        </div>
    );
};

export default Hero;
