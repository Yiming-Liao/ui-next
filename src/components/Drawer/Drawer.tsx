"use client"

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

const Drawer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const maskRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const elementRef = useRef<Array<HTMLDivElement | null>>([]);


    const animateDrawer = async (isOpen: boolean) => {
        setIsAnimating(true);
        // Mask 動畫
        gsap.to(maskRef.current, {
            opacity: isOpen ? 1 : 0, duration: 0.2,
            onStart: () => { isOpen && gsap.set(maskRef.current, { display: "block" }) },
            onComplete: () => { !isOpen && gsap.set(maskRef.current, { display: "none" }) }
        });
        // Drawer 動畫
        gsap.to(drawerRef.current, {
            x: isOpen ? 0 : "105%", duration: 0.2, ease: "power1.out",
        });
        // Elements 動畫
        gsap.set(elementRef.current, { opacity: 0, x: 50, });
        gsap.to(elementRef.current, {
            opacity: 1, x: 0, ease: "back.out(1.5)", duration: .2, delay: .1, stagger: 0.05,
            onComplete: () => setIsAnimating(false)
        });
    };

    const handleClick = (el: string) => {
        if (isAnimating) return;
        if (el === "button") setIsOpen(prev => !prev);
        else setIsOpen(false);
    }

    useEffect(() => {
        animateDrawer(isOpen);
    }, [isOpen]);

    // 點擊其他部分立即關閉
    useGSAP(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!drawerRef.current || !buttonRef.current) return;
            if (!drawerRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) setIsOpen(false);
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, { scope: ref });

    return (
        <div ref={ref} className="">
            <div
                ref={maskRef}
                className="fixed w-full h-full top-0 left-0 bg-black/60 z-[60] opacity-0"
            />


            <button
                ref={buttonRef}
                className="w-24 h-12 bg-slate-200 rounded-md z-[65] relative"
                onClick={() => handleClick("button")}
            >
                Click.
            </button>

            <div
                ref={drawerRef}
                className="fixed top-0 right-0 translate-x-[105%] overflow-hidden max-w-[50%] w-[500px] h-full z-[70] bg-slate-100
                flex flex-col items-center py-12"
            >
                <button
                    onClick={() => handleClick("element")}
                    className="w-20 h-10 rounded-xl text-slate-600 bg-white flex justify-center items-center shadow-md mb-12"
                >
                    關 閉
                    {/* <X /> */}
                </button>
                {React.Children.map(children, (child, i) => (
                    <div
                        key={i}
                        ref={el => { elementRef.current[i] = el }}
                        className="w-[90%]"
                    >
                        {child}
                    </div>
                ))}
            </div>


        </div>
    )
}
export default Drawer