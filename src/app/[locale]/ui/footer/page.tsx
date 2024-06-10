"use client"

import Footer from "@/components/Footer/Footer";
import { NextPage } from "next"
const Page: NextPage = () => {

    return (
        <main className="w-full h-auto bg-white flex flex-col items-center">
            <div className="h-[100vh]" />
            <h1 className="absolute top-96 left-[20%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Footer</h1>

            <Footer />



        </main >
    )
}
export default Page;