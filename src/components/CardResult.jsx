import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal.jsx";

const CardResult = ({ data }) => {
    const [urlImage, setUrlImage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState("");
    const prevDataRef = useRef();

    useEffect(() => {
        // Update the URL image only when the data changes
        if (data !== prevDataRef.current) {
            setUrlImage(data);
            prevDataRef.current = data;
        }
    }, [data]);

    const handleViewFull = () => {
        setFullImageUrl(urlImage);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="py-4 px-4 max-w-full">
            <div className="bg-white dark:bg-gray-700 shadow-xl rounded p-4 w-full">
                {!urlImage && (
                    <div className="h-80 w-80 bg-gray-300 rounded mx-auto px-2 animate-pulse"></div>
                )}

                {urlImage && (
                    <img
                        loading="lazy"
                        src={urlImage}
                        alt={name}
                        className="h-80 w-80 rounded mx-auto px-2 object-cover cursor-pointer"
                    />
                )}
                <div className="flex justify-between items-center mt-4 px-2">
                    <a
                        href={urlImage}
                        className="px-4 py-2 bg-teal-500 rounded transition-all hover:bg-teal-600 font-semibold text-sm"
                        target="blank"
                    >
                        View
                    </a>

                    <button
                        className="px-4 py-2 bg-teal-500 rounded transition-all hover:bg-teal-600 font-semibold text-sm"
                        onClick={handleViewFull}
                    >
                        View Full
                    </button>
                </div>
            </div>

            {showModal && (
                <Modal imageUrl={fullImageUrl} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default CardResult;
