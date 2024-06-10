"use client"

import { NextPage } from "next"
import ButtonTabs from "@/components/Tabs/ButtonTabs"

const page: NextPage = () => {
    return (
        <main className="w-full min-h-[200svh] bg-white flex flex-col items-center">

            <div className="relative w-4/5 h-96 flex justify-center items-center border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Button Tabs</h1>
                <ButtonTabs />
            </div>


        </main>
    )
}
export default page;