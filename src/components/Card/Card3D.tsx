"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';

export const Card3D = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({ transform: '' });
    const [isHovered, setIsHovered] = useState(false);

    // Mouse Move
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 15; //轉動幅度
        const y = -(e.clientY - top - height / 2) / 15; //轉動幅度
        setStyle({ transform: `rotateY(${x}deg) rotateX(${y}deg)` });
    };

    // Mouse Enter
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Mouse Leave
    const handleMouseLeave = () => {
        setIsHovered(false);
        setStyle({ transform: 'rotateY(0deg) rotateX(0deg)' });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s ease-out',
                perspective: "1000px",
            }}
            className='w-96 h-96 bg-black flex flex-col justify-center gap-2 rounded-xl shadow-lg p-6'
        >
            <p
                className='text-xl font-bold text-white'
                style={{
                    transform: isHovered ? 'translateZ(50px)' : 'translateZ(0px)', // 根據 isHovered 狀態設定 translateZ
                    transition: 'transform 0.2s ease-out', // 平滑過渡效果
                }}
            >
                Hover over me!
            </p>
            <Image
                src="/1.jpg" alt="thumbnail" height="1000" width="1000"
                className="h-60 w-auto object-cover rounded-xl shadow-md"
                style={{
                    transform: isHovered ? 'translateZ(100px)' : 'translateZ(0px)', // 根據 isHovered 狀態設定 translateZ
                    transition: 'transform 0.2s ease-out', // 平滑過渡效果
                }}
            />

        </div>
    );
};

export default Card3D;
