import {BiCode} from 'react-icons/bi'
import {BiGlobe} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {FiBriefcase} from 'react-icons/fi'
import {FiZap} from 'react-icons/fi'

export default function SectionTwo() {
  return (
    <div className=' w-full flex flex-col items-center justify-center bg-[#F8FAFC] py-12'>
        <h1 className='font-jakarta text-gray leading-4 font-bold text-[18px]'>Browse by Category</h1>
        <div className='w-full max-w-98.5 flex flex-wrap lg:flex-nowrap justify-center gap-3 pt-6'>
        <div className='flex flex-row items-center bg-[#F5F3FF] border border-[#EDE9FE] rounded-[14px] py-3 px-4'>
          <BiCode className='text-purple mr-2'/>
          <p className='font-jakarta text-purple leading-4 font-semibold text-[14px]'>Frontend</p>
          <span className='font-jakarta text-purple/50 leading-4 font-normal text-[12px] pl-2.5'>2</span>
        </div>
        <div className='flex flex-row items-center bg-[#F0F9FF] border border-[#DFF2FE] rounded-[14px] py-3 px-4'>
          <BiGlobe className='text-info mr-2'/>
          <p className='font-jakarta text-info leading-4 font-semibold text-[14px]'>WordPress</p>
          <span className='font-jakarta text-info/50 leading-4 font-normal text-[12px] pl-2.5'>2</span>
        </div>
        <div className='w-36.75 flex flex-row items-center bg-[#FFF7ED] border border-[#FFEDD4] rounded-[14px] py-3 px-4'>
          <FiUsers className='text-accent mr-2'/>
          <p className='font-jakarta text-accent leading-4 font-semibold text-[14px]'>Leadership</p>
          <span className='font-jakarta text-accent/50 leading-4 font-normal text-[12px] pl-2.5'>1</span>
        </div>
        <div className='w-47 flex flex-row items-center bg-[#ECFDF5] border border-[#D0FAE5] rounded-[14px] py-3 px-4'>
          <FiBriefcase className='text-teal mr-2'/>
          <p className='font-jakarta text-teal leading-4 font-semibold text-[14px]'>Entrepreneurship</p>
          <span className='font-jakarta text-teal/50 leading-4 font-normal text-[12px] pl-2.5'>1</span>
        </div>
        <div className='flex flex-row items-center bg-[#EEF2FF] border border-[#E0E7FF] rounded-[14px] py-3 px-4'>
          <FiZap className='text-primary mr-2'/>
          <p className='font-jakarta text-primary leading-4 font-semibold text-[14px]'>Backend</p>
          <span className='font-jakarta text-primary/50 leading-4 font-normal text-[12px] pl-2.5'>0</span>
        </div>
        </div>
    </div>
  )
}
