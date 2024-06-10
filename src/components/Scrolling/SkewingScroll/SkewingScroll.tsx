import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const SkewingScroll: React.FC<{ children: React.ReactNode, skewRange: number }> = ({ children, skewRange }) => {
    const skewingScrollRef = useRef<HTMLDivElement | null>(null);
    const boxRef = useRef<HTMLDivElement | null>(null);
    const lastScrollTop = useRef(0);
    const isInitial = useRef(true); // 用來標記是否是初始載入
    const scrollTimeout = useRef<number | null>(null);

    const { contextSafe } = useGSAP({ scope: skewingScrollRef });

    useEffect(() => {
        const handleScroll = contextSafe(() => {
            const scrollTop = window.scrollY;
            const scrollDirection = scrollTop > lastScrollTop.current ? 1 : -1; // 判斷滾動方向
            let scrollSpeed = Math.abs(scrollTop - lastScrollTop.current);

            if (isInitial.current) {
                scrollSpeed = 0;
                isInitial.current = false;
            }

            if (boxRef.current) {
                gsap.to(boxRef.current, {
                    skewY: scrollSpeed * skewRange * scrollDirection, // 根據滾動方向調整 skewY 的符號
                    duration: 0.2,
                    ease: "power1.out"
                });
            }

            lastScrollTop.current = scrollTop;

            // 重置計時器
            if (scrollTimeout.current !== null) {
                clearTimeout(scrollTimeout.current);
            }

            // 設置新的計時器
            scrollTimeout.current = window.setTimeout(() => {
                if (boxRef.current) {
                    gsap.to(boxRef.current, {
                        skewY: 0,
                        duration: 0.2,
                        ease: "power1.out"
                    });
                }
            }, 100); // 100ms 無滾動視為滾動停止
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current !== null) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [contextSafe, skewRange]);

    return (
        <div ref={skewingScrollRef}>
            <div ref={boxRef}>
                {children}
            </div>
        </div>
    );
};

export default SkewingScroll;
