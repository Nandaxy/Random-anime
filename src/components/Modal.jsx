import React from "react";

const Modal = ({ imageUrl, onClose }) => {
    const stopPropagation = e => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                onClick={stopPropagation}
            >
                <img
                    src={imageUrl}
                    alt="Full Image"
                    className="w-[100%] h-auto cursor-pointer"
                    onClick={stopPropagation}
                />
                <button
                    className="absolute top-2 right-2 text-red-500 text-5xl"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Modal;
