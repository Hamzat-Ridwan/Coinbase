// import Link from 'next/link'
import { useLocation, Link } from 'react-router-dom';
import {VscSettings} from 'react-icons/vsc'
import {TfiStatsUp} from 'react-icons/tfi'
import React from 'react'

const Layout = ({children}) => {
    const router = useLocation();
  return (
    <div>
        <div className='px-8 py-4 border border-b-slate-300 font-bold'>Coinbase</div>
        <div className='flex'>
            <div className='w-[18%] shadow-shadow1 h-[100vh] pt-4 pr-4 sticky top-0 left-0 bottom-0'>
                <Link to="/settings">
                    <div className={`h-[50px] ${router.pathname === "/settings" ? "bg-gradient-to-b from-[#d262a4] to-[#8742b3] text-white" : ""}  p-3 flex items-center rounded-r-full mb-2 `}>
                        <VscSettings className='mr-[10px]' />
                        <span className='hidden sm:block'>Settings</span>
                    </div>
                </Link>
                <Link to="/statistics">
                    <div className={`h-[50px] ${router.pathname === "/statistics" ? "bg-gradient-to-b from-[#d262a4] to-[#8742b3] text-white" : ""}  p-3 flex items-center rounded-r-full mb-2 `}>
                        <TfiStatsUp className='mr-[10px]'/>
                        <span className='hidden sm:block'>Statistics</span>
                    </div>
                </Link>
            </div>
            <div className='p-[40px] w-full'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout