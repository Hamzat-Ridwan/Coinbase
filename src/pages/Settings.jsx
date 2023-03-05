import React from 'react'
import Layout from '../components/Layout'

const Settings = () => {
  return (
    <div>
        <Layout>
            <div className='shadow-shadow1 rounded w-full'>
                <h2 className='pt-[30px] pb-[20px] px-[50px] border-b-[1.5px] font-bold text-[18px]'>Automation Settings</h2>
                <div className='px-[50px] pt-[20px] pb-[50px]'>
                    <div className='mb-[20px]'>
                        <label className='block mb-[12px]'>Account information source file</label>
                        <input className='rounded-full border-[1px] w-full p-[15px] pl-[30px]' type="text" placeholder='URL of Google Spreadsheet'/>
                    </div>
                    <div className='mb-[20px]'>
                        <label className='block mb-[12px]'>Number of Accounts</label>
                        <input className='rounded-full border-[1px] w-full p-[15px] pl-[30px]' type="text" placeholder='Leave it as blank for All'/>
                    </div>
                    <div className='mb-[20px]'>
                        <label className='block mb-[12px]'>Result file URL</label>
                        <input className='rounded-full border-[1px] w-full p-[15px] pl-[30px]' type="text" placeholder='URL of Google Spreadsheet'/>
                    </div>

                    <div className='mt-[70px] flex gap-[30px] flex-wrap'>
                        <button className='p-[10px] mr-[30px] w-[150px] text-white rounded-full bg-gradient-to-b from-[#d262a4] to-[#8742b3]'>Start</button>
                        <button className='p-[10px] mr-[30px] w-[150px] text-white rounded-full bg-gradient-to-b from-[#d262a4] to-[#8742b3]'>Running...</button>
                        <button className='p-[10px] mr-[30px] w-[150px] text-white rounded-full bg-gradient-to-b from-[#d262a4] to-[#8742b3]'>Stop</button>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Settings