'use client'
import {mdrnWarfare} from '@/utils/fonts'
import {GunterzBlack} from '@/utils/fonts'
import {Againts} from '@/utils/fonts'
import {SourceSansProLight} from '@/utils/fonts'
import Link from 'next/link'
import { gsap } from "gsap";

import Navbar from '@/app/ui/Navbar'

// https://xpd-kasun.github.io/tailwind-3dtransform-plugin/guide/rotate
export default function Home() {
  return (
    <>
      {/* <div className='fixed flex w-full justify-center items-center mt-6'>
        <Navbar/>
      </div> */}
      <div className={`${Againts.className} behind select-none fixed text-[20em] h-full w-full z-0 flex items-center justify-center`}>
        <h1 className='opacity-15 select-none'>DRIC</h1>
      </div>
      <main className=" min-h-screen text-black grid grid-cols-3 p-8 overflow-y-hidden selection:bg-accent/50 ">
        <div className='h-full col-span-1 '>
          <section className="w-full flex bottom-7 fixed ">
            <div className={`flex flex-col text-6xl font-bold perspective-800 `}>
              <h1 className={`${mdrnWarfare.className} mbd`}>Made By</h1>
              <h1 className={`${mdrnWarfare.className} mbd`}>dric. .</h1>
              <hr className='w-full h-0 bg-black mt-[0.5px]'/>
              <div className={`${SourceSansProLight.className} text-sm font-bold text-white mt-[0.5px] ml-1`}>
                <h1 className=''>Web Developer/Programmer</h1>
              </div>
              
            </div>
          </section>
         
        </div>


        
        <div className='h-full w-full p-2 overflow-x-clip col-span-2'>
          <div className=" flex flex-col pr-6">
            <div className={`${GunterzBlack.className} dwn flex flex-col justify-end text-8xl select-none `}>
              <div className="w-full text-right ml-auto">
                <ul className="project ">
                  <Link href="nexdev.org" target='_blank'><li className="dwn-item "><span className='text-sm'>3-2024-P</span>/NEXUS</li></Link>
                  <Link href="https://dkidfuego.web.app/" target='_blank'><li className="dwn-item "><span className='text-sm'>4-2024-5</span>/DAKIDD FUEGO</li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='h-full p-2'>
          <div className=" flex flex-col">
            <div className={`${GunterzBlack.className} flex flex-col justify-end text-8xl select-none perspective-container`}>
              <div className="inner-perspective w-full text-right">
                <ul className="perspective-list project">
                  <li className="perspective-item"></li>
                  <li className="perspective-item"></li>
                  <li className="perspective-item"></li>
                  <li className="perspective-item"></li>
                  <li className="perspective-item"></li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}





      </main>
      </>
  );
}
