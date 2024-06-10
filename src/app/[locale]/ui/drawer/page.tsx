"use client"

import Drawer from '@/components/Drawer/Drawer';
import { Languages, Eclipse } from 'lucide-react';
import HoverButton from '@/components/Button/HoverButton';

const page = () => {
    return (

        <main className="w-full h-auto bg-white flex flex-col items-center">


            <div className="relative w-4/5 h-[700px] flex justify-center items-center border-b-4 border-slate-500/20 pt-20">
                <h1 className="absolute top-12 left-[10%] font-semibold text-slate-600 border-b-4 border-slate-300 p-2">Drawer</h1>

                <Drawer>
                    <div className='w-[90%] h-48 py-2 px-4 gap-4 mx-auto rounded-xl bg-white text-slate-600 flex flex-col items-center shadow-md mb-12'>
                        <div className='self-start ml-3 mt-3'>
                            <Languages />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            {["English", "中文"].map((str) => (
                                <HoverButton
                                    key={str}
                                    pClassName={'font-semibold'}
                                    buttonClassName={'w-full h-12 bg-slate-100 rounded-md hover:text-white'}
                                    spanClassName={'w-16 h-8 bg-slate-600 rounded-full left-96'}
                                    scale={1.6}
                                >
                                    {str}
                                </HoverButton>
                            ))}
                        </div>
                    </div>

                    <div className='w-[90%] h-32 py-2 px-4 gap-4 mx-auto rounded-xl bg-white text-slate-600 flex flex-col items-center shadow-md mb-12'>
                        <div className='self-start ml-3 mt-3'>
                            <Eclipse />
                        </div>
                        <div className='w-[90%] h-12 bg-slate-600/20 rounded-full'></div>
                    </div>

                    <button className='absolute bottom-12 left-[50%] -translate-x-[50%] w-32 h-16 mx-auto  rounded-full bg-white text-slate-600 flex justify-center items-center shadow-md'>
                        About
                    </button>
                </Drawer>

            </div>
        </main>
    )
}
export default page