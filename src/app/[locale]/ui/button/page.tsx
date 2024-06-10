"use client"

import { NextPage } from "next"
import HoverButton from "@/components/Button/HoverButton";
import MegneticButton from "@/components/Button/MegneticButton";
import RippleButton from "@/components/Button/RippleButton";
import RippleEffect from "@/components/RippleEffect";

const page: NextPage = () => {
    return (
        <main className="w-full h-auto bg-white flex flex-col items-center pb-96">


            <div className="relative w-4/5 h-96 flex justify-center items-center border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Hover Button</h1>
                <HoverButton
                    pClassName={" font-semibold group-hover:text-white group-active:text-slate-300 duration-75"}
                    buttonClassName={"w-48 h-24 rounded-xl bg-slate-100 active:shadow-inner"}
                    spanClassName={"bg-slate-900/80 rounded-full"}
                    scale={1.5}
                >
                    Click.
                </HoverButton>
            </div>


            <div className="relative w-4/5 h-96 flex justify-center items-center gap-10 border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Megnetic Button</h1>
                <MegneticButton maxDistance={0}>
                    <button className="w-20 h-20 bg-slate-200 text-white rounded-md">0</button>
                </MegneticButton>
                <MegneticButton maxDistance={5}>
                    <button className="w-20 h-20 bg-slate-400 text-white rounded-md">5</button>
                </MegneticButton>
                <MegneticButton maxDistance={10}>
                    <button className="w-20 h-20 bg-slate-600 text-white rounded-md">10</button>
                </MegneticButton>
                <MegneticButton maxDistance={20}>
                    <button className="w-20 h-20 bg-slate-800 text-white rounded-md">20</button>
                </MegneticButton>
            </div>


            <div className="relative w-4/5 h-96 flex justify-center items-center border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Ripple Button</h1>
                <RippleButton
                    buttonStyles={"w-28 h-14 bg-white shadow-md rounded-full"}
                    rippleStyles={"bg-slate-200"}
                    rippleScale={3}
                    rippleDuration={1}        >
                    Click
                </RippleButton>
            </div>






            <div className="relative w-4/5 h-96 flex justify-center items-center border-b-4 border-slate-500/20  pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Hover Button + Ripple Button</h1>
                <HoverButton
                    pClassName={"font-semibold group-hover:text-white duration-75"}
                    buttonClassName={"w-40 h-20 rounded-xl bg-slate-100 active:shadow-inner"}
                    spanClassName={"bg-slate-900/80 rounded-full"}
                    scale={1.5}
                >
                    <RippleEffect
                        buttonStyles={"w-full h-20 rounded-xl"}
                        rippleStyles={"bg-slate-200"}
                        rippleScale={3}
                        rippleDuration={1}
                    >
                        Click.
                    </RippleEffect>
                </HoverButton>
            </div>

        </main>
    )
}
export default page;