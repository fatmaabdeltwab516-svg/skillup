import ImgCard1 from '../assets/Container(4).svg'
import ImgCard2 from '../assets/Container (3).svg'
import ImgCard3 from '../assets/Container (2).svg'
import ImgCard4 from '../assets/Image (Ahmed Mohamed).svg'
import ImgCard5 from '../assets/Image (Sara Ali).svg'

let style ={
    styleBtn:"bg-primary w-[97px] px-2 py-1.5 rounded-[10px] font-jakarta leading-4 font-[400] text-[12px] text-white",
    stylecard:"bg-[#F1F5F9]  border border-[#E2E8F0] shadow-[#0000001A] rounded-2xl"
}

import { IoTimeOutline } from 'react-icons/io5'
import { IoMdBook } from 'react-icons/io'

export default function SectionThre() {
  return (
    <div className='w-full flex justify-center py-12 bg-white overflow-auto'>
        <div className='container w-full max-w-300 px-4 flex flex-col   '>
        <div>
            <h1 className='font-jakarta text-dark leading-12 font-bold text-[30px] lg:text-[38px] '>Featured Courses</h1>
            <div className='flex flex-col lg:flex-row lg:justify-between '>
                <p className='font-jakarta text-gray leading-7.25 font-[400px] text-[16px] text-start pt-5'>Explore practical courses designed to help you build real skills.</p>
                <button className='lighBtn'>View All Courses</button>
            </div>
        </div>
        <div  className=" grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
            <div className={style.stylecard}>
                <img src={ImgCard1} className='w-full rounded-t-2xl' alt="" />
                <div className='flex flex-row gap-2 p-5'>
                    <span className='bg-[#DFF2FE] w-21 rounded-lg'>
                        <p className='font-jakarta text-center text-info leading-4 font-semibold text-[12px]'>WordPress</p>
                    </span>
                     <span className='bg-[#DCFCE7] w-21 rounded-lg'>
                        <p className='font-jakarta text-center text-teal leading-4 font-semibold text-[12px]'>Beginner</p>
                    </span>
                    
                </div>
                <div className='w-full px-4'>
                    <h2 className='font-jakarta text-dark leading-5.5 font-bold text-[16px] '>WordPress Website Development</h2>
                    <p className='font-jakarta text-gray leading-7.25 font-[400px] text-[14px]'>Build complete, professional WordPress websites from scratch. Learn installation, theme </p>
                    <div className='flex flex-row gap-4 pt-4'>
                        <div className='flex items-center'>
                            <IoTimeOutline className='text-[#90A1B9]'/>
                            <p className='font-jakarta text-[#90A1B9] leading-5 font-[400px] text-[12px]'>24 Hours</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdBook className='text-[#90A1B9]'/>
                            <p className='font-jakarta text-[#90A1B9] leading-5 font-[400px] text-[12px]'>8 sessions</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 min-[375px]:gap-[36.5px] lg:gap-[36.5px]  pb-5 pt-5 ">
                        <div className='flex items-center '>
                            <img src={ImgCard4} alt="" />
                            <p  className='font-jakarta text-gray leading-4 font-medium text-[12px] min-[375px]:text-nowrap pl-2 '>Ahmed Mohamed</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='font-jakarta text-dark leading-5.5 font-bold text-[16px] pr-2.5'>$120</p>
                            <button className={style.styleBtn}>View Course</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.stylecard}>
                <img src={ImgCard2} className='w-full rounded-t-2xl' alt="" />
                <div className='flex flex-row gap-2 p-5'>
                    <span className='bg-[#DFF2FE] w-21 rounded-lg'>
                        <p className='font-jakarta text-center text-info leading-4 font-semibold text-[12px]'>WordPress</p>
                    </span>
                     <span className='bg-[#FEF3C6] w-21 rounded-lg'>
                        <p className='font-jakarta text-center text-[#BB4D00] leading-4 font-semibold text-[12px]'>Intermediate</p>
                    </span>
                </div>
                 <div className='w-full px-4'>
                    <h2 className='font-jakarta text-dark leading-5.5 font-bold text-[16px] '>Dynamic Websites with ACF</h2>
                    <p className='font-jakarta text-gray leading-7.25 font-[400px] text-[14px]'>Master Advanced Custom Fields to create flexible, data-driven WordPress sites. Build </p>
                    <div className='flex flex-row gap-4 pt-4'>
                        <div className='flex items-center'>
                            <IoTimeOutline className='text-[#90A1B9]'/>
                            <p className='font-jakarta text-[#90A1B9] leading-5 font-[400px] text-[12px]'>18 Hours</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdBook className='text-[#90A1B9]'/>
                            <p className='font-jakarta text-[#90A1B9] leading-5 font-[400px] text-[12px]'>6 sessions</p>
                        </div>
                    </div>
                    <div className="flex flex-row  gap-5 min-[375px]:gap-[36.5px] lg:gap-[36.5px]  pb-5 pt-5">
                        <div className='flex items-center w-full'>
                            <img src={ImgCard4} alt="" />
                            <p  className='font-jakarta text-gray leading-4 min-[375px]:text-nowrap font-medium text-[12px] pl-2 '>Ahmed Mohamed</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='font-jakarta text-dark leading-5.5 font-bold text-[16px] pr-2.5'>$100</p>
                            <button className={style.styleBtn}>View Course</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.stylecard}>
                <img src={ImgCard3} className='w-full rounded-t-2xl' alt="" />
                <div className='flex flex-row gap-2 p-5'>
                    <span className='bg-[#EDE9FE] w-21 rounded-lg'>
                        <p className='font-jakarta text-center text-purple leading-4 font-semibold text-[12px]'>Frontend</p>
                    </span>
                     <span className='bg-[#DCFCE7] w-21 rounded-lg'>
                        <p className='font-jakarta text-center text-teal leading-4 font-semibold text-[12px]'>Beginner</p>
                    </span>
                </div>
                 <div className='w-full px-4'>
                    <h2 className='font-jakarta text-dark leading-5.5 font-bold text-[16px] '>Frontend Development Fundamentals</h2>
                    <p className='font-jakarta text-gray leading-7.25 font-[400px] text-[14px]'>Start your web development journey with HTML, CSS, and JavaScript. </p>
                    <div className='flex flex-row gap-4 pt-4'>
                        <div className='flex items-center'>
                            <IoTimeOutline className='text-[#90A1B9]'/>
                            <p className='font-jakarta text-[#90A1B9] leading-5 font-[400px] text-[12px]'>30 Hours</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdBook className='text-[#90A1B9]'/>
                            <p className='font-jakarta text-[#90A1B9] leading-5 font-[400px] text-[12px]'>10 sessions</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 min-[375px]:gap-[36.5px] lg:gap-[36.5px] pb-5 pt-5">
                        <div className='flex items-center w-full'>
                            <img src={ImgCard5} alt="" />
                            <p  className='font-jakarta text-gray leading-2 font-medium text-[12px] pl-2 text-nowrap'>Sara Ali</p>
                        </div>
                        <div className='flex items-center '>
                            <p className='font-jakarta text-dark leading-5.5 font-bold text-[16px] pr-2.5'>$140</p>
                            <button className={style.styleBtn}>View Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
