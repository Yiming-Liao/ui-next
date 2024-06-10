import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProgressBar: React.FC = () => {
    const progressBarRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (progressBarRef.current) {
            const animation = gsap.to(progressBarRef.current, {
                width: '100%',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: .2
                }
            });

            return () => {
                if (animation.scrollTrigger) animation.scrollTrigger.kill();
                animation.kill();
            };
        }
    }, { scope: progressBarRef });

    return (
        <div ref={progressBarRef} className="z-[999] fixed top-0 left-[-1px] h-1 rounded-xl bg-blue-500/50" style={{ width: 0 }} />
    );
};

export default ProgressBar;
