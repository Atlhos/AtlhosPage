import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
        <div className="relative w-24 h-24">
            {/* Círculo giratório */}
            <div className="absolute inset-0 rounded-full border-4 border-t-mainDark border-r-transparent border-b-transparent border-l-main animate-spin" />
            


            {/* Glow no fundo */}
            <div className="absolute inset-0 rounded-full bg-main blur-2xl opacity-10 animate-ping" />
        </div>
        </div>
    );
};

export default Loading;
