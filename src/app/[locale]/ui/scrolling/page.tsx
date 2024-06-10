"use client"

import { NextPage } from "next"
import ScrollProgressBar from "@/components/Scrolling/ScrollProgressBar"
import ScrollProgressBar2 from "@/components/Scrolling/ScrollProgressBar2"
import SkewingScroll from "@/components/Scrolling/SkewingScroll/SkewingScroll"

const page: NextPage = () => {
    return (
        <main className="w-full min-h-[200svh] bg-white flex flex-col items-center">


            <div className="relative w-4/5 h-auto flex justify-center items-center border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Skew Scroll</h1>
                <div className="m-20">
                    <SkewingScroll skewRange={0.1}>
                        <div className="w-96 h-[200vh] border-8 border-slate-600 p-6 rounded-sm">
                            {Array(14).fill(null).map((_, i) => <div key={i} className="h-24 bg-slate-300 rounded-sm shadow-md m-6"></div>)}
                        </div>
                    </SkewingScroll>
                </div>
            </div>


            <div className="relative w-4/5 h-[500px] flex justify-center items-center border-b-4 border-slate-500/20  pt-20 mb-[500px]">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Scroll Progress Bar</h1>
                <ScrollProgressBar />
                <ScrollProgressBar2 />
            </div>

        </main>
    )
}
export default page;