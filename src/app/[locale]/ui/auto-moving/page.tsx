"use client"

import { NextPage } from "next"
import InfiniteScroll from "@/components/AutoMoving/InfiniteScroll";

const page: NextPage = () => {
    return (
        <main className="w-full h-auto bg-white flex flex-col items-center">


            <div className="relative w-4/5 h-[500px] flex justify-center items-center border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Infinite Scroll</h1>
                <InfiniteScroll />
            </div>


        </main>
    )
}
export default page;