import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 3, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`relative inline-block overflow-hidden ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: disabled ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)', // Base dim color
                animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
            }}
        >
            {text}
            <style>
                {`
          @keyframes shine {
            0% {
              background-position: 100%;
            }
            100% {
              background-position: -100%;
            }
          }
        `}
            </style>
        </div>
    );
};

export default ShinyText;
