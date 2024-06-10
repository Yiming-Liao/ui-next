"use client"

import useInView from "@/hooks/useInView";
import { NextPage } from "next"

const Page: NextPage = () => {

    const { ref, isInView } = useInView({
        once: false,  // 只在首次進入視口時觸發
        rootMargin: '-100px 0px',   // '-100px 0px -100px 0px' 上右下左
        threshold: 0.5  // 至少有 50% 的元素內容進入視口時觸發
    });


    return (
        <main className="w-full h-auto bg-white flex flex-col items-center">

            <div className="relative w-4/5 h-[200vh] flex justify-center items-center border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">In View Hook</h1>
                <div ref={ref} className={`w-96 h-96 bg-slate-300 ${isInView ? "opacity-1" : "opacity-0"} transition-all duration-700`}>
                    <p className='w-fit h-full m-auto mt-44'>useInView</p>
                </div>
            </div>


        </main>
    )
}
export default Page;