import { useState, useEffect, useRef } from "react";
import CardResult from "./CardResult.jsx";
import LoadingCard from "./LoadingCard.jsx";

const SearchResult = ({ search, setIsLoading, isLoading }) => {
    const [searchData, setSearchData] = useState([]);
    const imageRefs = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `https://inquisitive-buckle-ant.cyclic.app/search/pinterest?query=${search}`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data.result);
                setSearchData(data.result.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching search result:", error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [search]);

    const numCardsToDisplay =
        Math.floor(Math.random() * (searchData.length - 1)) + 2;

    const shuffledData = searchData.sort(() => Math.random() - 0.5);

    const randomSubset = shuffledData.slice(0, numCardsToDisplay);

    return (
        <div className="py-12 max-w-full">
            <h1 className="px-2 font-bold text-4xl pb-1 text-center text-gray-800 dark:text-white">
                Search :
            </h1>
            <p className="px-2 font-bold text-xl pb-1 text-center text-gray-800 dark:text-white">
                {search}
                <span className="bg-red-500 rounded-full p-1 text-[10px] ml-2 shadow my-auto text-white">
                    {isLoading ? "0" : numCardsToDisplay}
                </span>
            </p>
            <p className="pb-6 text-gray-200 text-sm opacity-70 text-center text-gray-600 dark:text-white">
                Fetching from
                <a
                    className="text-cyan-400 hover:underline pl-1"
                    href="https://github.com/Nandaxy/my-api-v2"
                >
                    my-api-v2
                </a>{" "}
                and{" "}
                <a
                    className="text-cyan-400 hover:underline pl-1"
                    href="http://pinterest.com/"
                >
                    Pinterest
                </a>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {isLoading ? (
                    <LoadingCard />
                ) : (
                    randomSubset.map((item, index) => (
                        <CardResult
                            key={index}
                            data={item}
                            ref={element =>
                                (imageRefs.current[index] = element)
                            }
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchResult;
