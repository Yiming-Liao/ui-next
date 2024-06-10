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
                    trigger: progressBarRef.current,
                    start: 'bottom bottom-=100',
                    end: 'top top+=200',
                    scrub: .2,
                    // markers: true,
                }
            });

            return () => {
                if (animation.scrollTrigger) animation.scrollTrigger.kill();
                animation.kill();
            };
        }
    }, { scope: progressBarRef });

    return (
        <div className='w-4/5 h-auto border-x-4 border-slate-300 rounded-sm'>
            <div ref={progressBarRef} className="h-5 shadow-md bg-orange-300" style={{ width: 0 }} />
        </div>
    );
};

export default ProgressBar;
