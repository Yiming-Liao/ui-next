"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import HoverDropdown from "../Dropdown/HoverDropdown";
import Dropdown from "../Dropdown/Dropdown";
import HoverButton from "../Button/HoverButton";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const localeCode = segments[1];
    const currentPagePath = segments.slice(2).join('/'); // 獲取當前語言後面的路徑
    const router = useRouter();


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`z-50 fixed left-[50vw] transform -translate-x-1/2 ${isScrolled ? 'top-0  w-[100vw] h-16' : 'top-4 w-[90vw] h-20 rounded-full'} 
        transition-all duration-200 bg-white shadow-md bg-opacity-60 backdrop-filter backdrop-blur-lg`}>
            <div className="w-full h-full px-7 flex justify-between items-center">
                <Link href={`/${localeCode}`} className="scale-150 p-1 rounded-full hover:shadow-md">🍪</Link>

                <div className="flex justify-center items-center gap-6">
                    <Link
                        href={`/${localeCode}/about`}
                        className="w-20 h-12 shadow-md flex justify-center items-center rounded-full"
                    >
                        About
                    </Link>

                    <HoverDropdown
                        buttonText={'UI'}
                        buttonClassName={'w-12 h-10 bg-slate-200 rounded-md font-semibold text-slate-600 shadow-md'}
                        divClassName={'right-0 w-[220px] h-fit px-6 py-4 rounded-md bg-slate-100 flex flex-wrap gap-3'}>
                        <Link href={`/${localeCode}/ui/button`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Button</Link>
                        <Link href={`/${localeCode}/ui/card`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Card</Link>
                        <Link href={`/${localeCode}/ui/tabs`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Tabs</Link>
                        <Link href={`/${localeCode}/ui/footer`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Footer</Link>
                        <Link href={`/${localeCode}/ui/dropdown`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Dropdown</Link>
                        <Link href={`/${localeCode}/ui/scrolling`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Scrolling</Link>
                        <Link href={`/${localeCode}/ui/auto-moving`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Auto Moving</Link>
                        <Link href={`/${localeCode}/ui/drawer`} className='w-auto px-3 py-1 bg-slate-500 rounded-md text-white'>Drawer</Link>

                    </HoverDropdown>


                    <Dropdown
                        buttonText={localeCode === "en" ? "EN" : localeCode === "zh" ? "中" : "DE"}
                        buttonClassName="w-12 h-10 bg-slate-50 shadow-md rounded-md font-semibold text-slate-600 active:shadow-none"
                        divClassName="right-0 justify-center gap-2 rounded-md py-2 px-2 shadow-xl"
                    >
                        {["English", "中文", "Deutsch"].map((el, idx) => (
                            <HoverButton
                                onClick={() => {
                                    if (el === "English") {
                                        router.push(`/en/${currentPagePath}`);
                                    } else if (el === "中文") {
                                        router.push(`/zh/${currentPagePath}`);
                                    } else {
                                        router.push(`/de/${currentPagePath}`);
                                    }
                                }}
                                key={idx}
                                pClassName={"text-slate-600 group-hover:text-white duration-75"}
                                buttonClassName={"w-20 h-8 rounded-md bg-slate-100 active:shadow-inner"}
                                spanClassName={"bg-slate-900/80 rounded-full"}
                                scale={1.6}
                            >
                                {el}
                            </HoverButton>
                        ))}
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}
export default Navbar