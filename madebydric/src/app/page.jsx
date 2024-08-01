'use client'
import {mdrnWarfare} from '@/utils/fonts'
import {GunterzBlack} from '@/utils/fonts'
import { gsap } from "gsap";

import Navbar from '@/app/ui/Navbar'

// https://xpd-kasun.github.io/tailwind-3dtransform-plugin/guide/rotate
export default function Home() {
  return (
    <>
      {/* <div className='fixed flex w-full justify-center items-center mt-6'>
        <Navbar/>
      </div> */}
      <main className="min-h-screen text-black grid grid-cols-2 p-12 overflow-y-hidden selection:bg-accent/50 ">
        <div className='h-full col-span-1'>
          <section className="w-full flex bottom-11 fixed  text-white ">
            <div className={`flex flex-col text-6xl font-bold perspective-800 `}>
              <h1 className={`${mdrnWarfare.className} `}>Made By</h1>
              <h1 className={`${mdrnWarfare.className} `}>dric. .</h1>
            </div>
          </section>
        </div>


        
        <div className='perspective-8'>
          <div className='transform-style-3d rotate-x-15 -rotate-y-20'>
            <div className="h-full p-2 w-11/12 flex flex-col space-y-12 justify-center items-center bg-red-500">
              <div className={`${GunterzBlack.className} text-gray-300 flex flex-col items-center text-8xl select-none`}>
                <h1 className="mb-12">Project Name</h1>
                <h1 className="mb-12">Project Name</h1>
                <h1 className="mb-12">Project Name</h1>
                <h1 className="mb-12">Project Name</h1>
              </div>
            </div>
          </div>
        </div>

      </main>
      </>
  );
}
