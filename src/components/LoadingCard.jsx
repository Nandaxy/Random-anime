const LoadingCard = () => {
    const cards = Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="py-4 px-4 max-w-full">
            <div className="bg-white dark:bg-gray-700 shadow-xl rounded p-4 w-full">
                <div className="h-80 w-80 bg-gray-300 rounded mx-auto px-2 animate-pulse"></div>
            </div>
        </div>
    ));

    return <>{cards}</>;
};

export default LoadingCard;
