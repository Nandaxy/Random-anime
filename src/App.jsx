import { useState } from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import SearchResult from "./components/SearchResult.jsx";

const App = () => {
    const [isSearch, setIsSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Navbar setIsSearch={setIsSearch} setIsLoading={setIsLoading} />
            <div className="pt-8 w-full min-h-screen bg-gray-100 dark:bg-gray-800 text-white flex flex-col items-center">
                {!isSearch && <Hero />}
                {isSearch && (
                    <SearchResult
                        search={isSearch}
                        setIsLoading={setIsLoading}
                        isLoading={isLoading}
                    />
                )}
                <p className="mt-auto text-sm font-light opacity-50 mb-4 hover:underline text-black dark:text-gray-400 ">
                    Made with ❤ by Nanda
                </p>
            </div>
        </>
    );
};

export default App;
