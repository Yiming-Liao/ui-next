"use client"

import { NextPage } from "next"
import Dropdown from "@/components/Dropdown/Dropdown";
import HoverButton from "@/components/Button/HoverButton";
import MegneticButton from "@/components/Button/MegneticButton";
import { useState } from "react";
import HoverDropdown from "@/components/Dropdown/HoverDropdown";

const Page: NextPage = () => {
    const [lang, setLang] = useState<"EN" | "中" | "DE">("EN");

    return (
        <main className="w-full h-auto bg-white flex flex-col items-center">

            <div className="relative w-4/5 h-[500px] flex justify-center items-center gap-20 border-b-4 border-slate-500/20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Dropdown</h1>
                <Dropdown
                    buttonText={lang}
                    buttonClassName="w-12 h-10 bg-slate-50 shadow-md rounded-md font-semibold text-slate-600 active:shadow-none"
                    divClassName="right-0 justify-center gap-2 rounded-md py-2 px-2 shadow-xl"
                >
                    {["English", "中文", "Deutsch"].map((el, idx) => (
                        <HoverButton
                            onClick={() => setLang(el === "English" ? "EN" : el === "中文" ? "中" : "DE")}
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

                <Dropdown
                    buttonText={"Simple."}
                    buttonClassName="w-20 h-10 bg-slate-500 text-white shadow-md rounded-md font-semibold active:shadow-none"
                    divClassName="left-[50%] -translate-x-[50%] justify-center gap-2 rounded-md py-2 px-2 shadow-xl"
                >
                    <MegneticButton maxDistance={5}>
                        <button className="w-20 h-10 bg-slate-300 rounded-md">Option.1</button>
                    </MegneticButton>
                    <MegneticButton maxDistance={5}>
                        <button className="w-20 h-10 bg-slate-300 rounded-md">Option.2</button>
                    </MegneticButton>
                </Dropdown>
            </div>


            <div className="relative w-4/5 h-[600px] flex justify-center items-center gap-20 border-b-4 border-slate-500/20 pb-28">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Hover Dropdown</h1>
                <HoverDropdown
                    buttonText={'UI'}
                    buttonClassName={'w-16 h-12 bg-slate-200 rounded-md font-semibold text-slate-600'}
                    divClassName={'right-0 w-[220px] h-fit px-6 py-4 rounded-md bg-slate-100 flex flex-wrap gap-3'}>
                    <button className='w-auto px-3 h-8 bg-slate-500 rounded-md text-white'>Button</button>
                    <button className='w-auto px-3 h-8 bg-slate-500 rounded-md text-white'>Card</button>
                    <button className='w-auto px-3 h-8 bg-slate-500 rounded-md text-white'>Tabs</button>
                    <button className='w-auto px-3 h-8 bg-slate-500 rounded-md text-white'>Footer</button>
                    <button className='w-auto px-3 h-8 bg-slate-500 rounded-md text-white'>Dropdown</button>
                    <button className='w-auto px-3 h-8 bg-slate-500 rounded-md text-white'>Scrolling</button>
                    <button className='w-auto px-3 h-8 bg-slate-500 rounded-md text-white'>Auto Moving</button>
                </HoverDropdown>
            </div>

        </main>
    )
}
export default Page;



