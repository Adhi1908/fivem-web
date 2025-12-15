import React from 'react';

const StarBorder = ({
    as: Component = 'div',
    className = '',
    color = 'cyan',
    speed = '6s',
    children,
    ...props
}) => {
    return (
        <Component className={`relative inline-block py-[1px] overflow-hidden rounded-[20px] ${className}`} {...props}>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className="relative z-1 border border-white/10 text-white text-center text-[10px] py-2 px-4 rounded-[20px]">
                {children}
            </div>
            <style>
                {`
          @keyframes star-movement-bottom {
            0% { transform: translate(0%, 0%); opacity: 1; }
            50% { opacity: 0; }
            100% { transform: translate(-100%, 0%); opacity: 1; }
          }
          @keyframes star-movement-top {
            0% { transform: translate(0%, 0%); opacity: 1; }
            50% { opacity: 0; }
            100% { transform: translate(100%, 0%); opacity: 1; }
          }
        `}
            </style>
        </Component>
    );
};

export default StarBorder;
