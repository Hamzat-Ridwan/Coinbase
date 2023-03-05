import { LazyLog } from 'react-lazylog';
import {FaLock} from 'react-icons/fa'
import React from 'react'
import Layout from '../components/Layout'

const Statistics = () => {
  return (
    <div>
        <Layout>
            <div className='shadow-shadow1 rounded w-full'>
                <FaLock className='text-red-500 h-[13px] pt-[3px]' />
                <h2 className='pt-[20px] pb-[20px] px-[50px] border-b-[1.5px] font-bold text-[18px]'>Log</h2>
                <div className='p-[10px] w-full'>
                <div className='relative'>
                    <LazyLog height='550px'/>
                    <button className='text-white absolute top-0 w-full h-full flex justify-center items-center'>Double click to edit</button>
                </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Statistics