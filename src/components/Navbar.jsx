import { useState, useEffect, useRef } from "react";

const Navbar = ({ setIsSearch, setIsLoading }) => {
    const isMountedRef = useRef(false);

    const [inputValue, setInputValue] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode");

        if (storedDarkMode !== null) {
            setIsDarkMode(storedDarkMode === "true");
        }
    }, []);

    useEffect(() => {
        const handleTheme = () => {
            document.body.classList.toggle("dark", isDarkMode);
            localStorage.setItem("darkMode", isDarkMode);
        };

        if (isMountedRef.current) {
            handleTheme();
        } else {
            isMountedRef.current = true;
        }
    }, [isDarkMode]);

    const handleChange = event => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        if (!inputValue) {
            return;
        }
        setIsSearch(inputValue);
        setIsLoading(true);
    };

    const handleKeyPress = event => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleDarkModeToggle = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
    };

    return (
        <div
            className={`fixed w-full bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-xl py-2 px-6 md:px-12 text-white flex justify-between items-center z-20 ${
                isDarkMode ? "dark" : ""
            }`}
        >
            <p className="font-bold text-xl text-gray-800 dark:text-white">
                Ny
            </p>
            <div className="flex items-center bg-gray-200/50 dark:bg-transparent opacity-95 backdrop-blur w-60 rounded">
                <input
                    className="bg-transparent focus:outline-none px-3 py-2 w-full text-gray-800 dark:text-white"
                    type="text"
                    placeholder="Cari sesuatu..."
                    value={inputValue}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <button className="px-2" onClick={handleSearch}>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.2em"
                            height="1.2em"
                            viewBox="0 0 24 24"
                            className="fill-gray-800 dark:fill-white"
                        >
                            <path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14" />
                        </svg>
                    </span>
                </button>
            </div>
            <span onClick={handleDarkModeToggle}>
                {!isDarkMode ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                        className="fill-gray-800 dark:fill-white"
                    >
                        <path d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                        className="fill-gray-800 dark:fill-white"
                    >
                        <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" />
                    </svg>
                )}
            </span>
        </div>
    );
};

export default Navbar;
