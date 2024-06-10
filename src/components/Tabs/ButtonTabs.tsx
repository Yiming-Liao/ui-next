import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const tabs = ['Home', 'Docs', 'Components', 'Effects'];

interface TabProps {
    text: string;
    onMouseEnter: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;  // 確保這裡聲明為接收一個 MouseEvent
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;  // 確保這裡聲明為接收一個 MouseEvent
    isActive: boolean;
    isHover: boolean;
}

const Tab: React.FC<TabProps> = ({ text, onMouseEnter, onClick, isActive }) => {
    return (
        <button
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            className={`z-10 px-4 py-2 font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-800'}`}
        >
            {text}
        </button>
    );
};

const Tabs: React.FC = () => {
    const [hoverTab, setHoverTab] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const hoverRef = useRef<HTMLSpanElement>(null);
    const clickRef = useRef<HTMLSpanElement>(null);

    const leaveRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP({ scope: leaveRef });

    const handleClick = contextSafe((tab: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setActiveTab(tab);
        const target = event.currentTarget;
        gsap.to(clickRef.current, {
            x: target.offsetLeft,
            width: target.offsetWidth,
            opacity: 1,
            duration: .3,
            ease: "power3.out"
        });
    });

    const handleMouseEnter = contextSafe((tab: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setHoverTab(tab);
        const target = event.currentTarget;
        gsap.to(hoverRef.current, {
            x: target.offsetLeft,
            width: target.offsetWidth,
            duration: .3,
            ease: "power3.out"
        });
    });


    const handleLeave = contextSafe(() => {
        setHoverTab(null);
        gsap.to(hoverRef.current, {
            opacity: 0,
            duration: .3,
            ease: "power3.out"
        });
    });

    const handleEnter = contextSafe(() => {
        gsap.to(hoverRef.current, {
            opacity: 1,
            duration: .3,
            ease: "power3.out"
        });
    });

    return (
        <div
            className="w-fit relative"
            ref={leaveRef} onMouseLeave={handleLeave} onMouseEnter={handleEnter}
        >
            <div className="flex gap-1">
                {tabs.map((tab) => (
                    <Tab
                        key={tab}
                        text={tab}
                        onClick={(e) => handleClick(tab, e)}
                        onMouseEnter={(e) => handleMouseEnter(tab, e)}
                        isHover={tab === hoverTab}
                        isActive={tab === activeTab}
                    />
                ))}
            </div>
            <span
                ref={hoverRef}
                className="absolute inset-0 z-0 rounded-md bg-orange-100 pointer-events-none"
                style={{ width: 0 }} // 初始化時無寬度，防止初始動畫
            ></span>
            <span
                ref={clickRef}
                className="absolute inset-0 z-0 rounded-md bg-orange-500 pointer-events-none"
                style={{ width: 0, opacity: 0 }} // 初始化時無寬度，防止初始動畫
            ></span>
        </div>
    );
};

export default Tabs;
