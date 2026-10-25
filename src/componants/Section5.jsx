import ImgCard4 from '../assets/Image (Ahmed Mohamed).svg'
import ImgCard5 from '../assets/Image (Sara Ali).svg'
import ImgCard6 from '../assets/Image (Omar Hassan).svg'
import {BiAward} from 'react-icons/bi'
import { IoMdBook } from 'react-icons/io'

let style ={
    styleh2:"font-jakarta text-dark leading-6 font-bold text-[16px] pt-4  text-center",
    stylep:"font-jakarta text-purple leading-5.5 font-SemiBold text-[14px] text-center pt-2 pb-5",
    stylep2:"font-jakarta text-gray leading-5.5 font-SemiBold text-[14px] px-6 pt-2 pb-5",
    stylep3:"font-jakarta leading-4 font-medium text-[12px] px-2 pt-0.5",
    stylebtn:"bg-transparent w-[calc(100%-40px)] lg:w-[313px] m-4 px-5 py-2.5  rounded-[10px] font-jakarta leading-5 font-semibold text-[14px] text-primary border-[0.69px] border-[#C6D2FF]",
    stylecard:"w-full max-w-90.75 border border-[#E2E8F0] shadow-[#0000001A] rounded-2xl"
}

export default function Section5() {
  return (
    <div className='w-full flex  justify-center py-10 bg-white overflow-auto'>
        <div className='container w-full max-w-300 px-4 flex flex-col '>
         <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 ">
               <h1 className='font-jakarta text-dark leading-12 font-bold text-[30px] lg:text-[38px]  '>Learn From Experienced Instructors</h1>
            <button className='lighBtn'>All Instructors</button>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className={style.stylecard}>
                <div className='flex flex-col items-center bg-[#EEF2FF] rounded-t-2xl'>
                    <img src={ImgCard4} className='w-20 h-20 pt-5' alt="" />
                        <h2 className={style.styleh2}>Ahmed Mohamed</h2>
                        <p className={style.stylep}>WordPress Developer & Instructor</p>
                        
                </div> 
                <div className="">
                    <p className={style.stylep2}>Ahmed is a WordPress developer and instructor with seven years of experience building dynamic websites and teaching practical web development. </p>
                    <div className="flex flex-row">
                        <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-21.25 h-6 ml-4 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>WordPress</p>
                        </div>
                         <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-20.25 h-6 ml-2 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>Elementor</p>
                        </div>
                         <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-11.5 h-6 ml-2 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>ACF</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-20 lg:gap-42.5 pl-4 pt-4">
                        <div className='flex flex-row items-center'>
                            <BiAward className='text-[#90A1B9] leading-4 font-medium text-[12px]'/>
                            <p className={`${style.stylep3} text-[#90A1B9]`}>3 courses</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <IoMdBook className='text-[#90A1B9] leading-4 font-medium text-[12px]'/>
                            <p className={`${style.stylep3} text-[#90A1B9]`}>7 yrs exp.</p>
                        </div>
                    </div>
                    <button className={style.stylebtn}>View Profile</button>
                </div>       
            </div>
            <div className={style.stylecard}>
                <div className='flex flex-col items-center bg-[#EEF2FF] rounded-t-2xl'>
                    <img src={ImgCard5} className='w-20 h-20 pt-5' alt="" />
                    <h2 className={style.styleh2}>Sara Ali</h2>
                    <p className={style.stylep}>Senior Frontend Developer</p>
                   
                </div>
                 <div className="">
                        <p className={style.stylep2}>Sara is a senior frontend developer with six years of experience in modern web technologies. She specializes in building performant, accessible.</p>
                        <div className="flex flex-row">
                        <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-13.25 h-6 ml-4 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>HTML</p>
                        </div>
                         <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-11.5 h-6 ml-2 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>CSS</p>
                        </div>
                         <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-20.5 h-6 ml-2 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>JavaScript</p>
                        </div>
                        <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-13.75 h-6 ml-2 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>React</p>
                        </div>
                        </div>
                        <div className="flex flex-row justify-between px-4  pt-4">
                        <div className='flex flex-row items-center'>
                            <BiAward className='text-[#90A1B9] leading-4 font-medium text-[12px]'/>
                            <p className={`${style.stylep3} text-[#90A1B9]`}>2 courses</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <IoMdBook className='text-[#90A1B9] leading-4 font-medium text-[12px]'/>
                            <p className={`${style.stylep3} text-[#90A1B9]`}>6 yrs exp.</p>
                        </div>
                    </div>
                    <button className={style.stylebtn}>View Profile</button>
                </div>
            </div>
            <div className={style.stylecard}>
                <div className='flex flex-col  items-center bg-[#EEF2FF] rounded-t-2xl'>
                    <img src={ImgCard6} className='w-20 h-20 pt-5' alt="" />
                    <h2 className={style.styleh2}>Omar Hassan</h2>
                    <p className={style.stylep}>Business & Leadership Trainer</p>
                    
                </div>
                <div className="">
                    <p className={style.stylep2}>Omar is a certified business and leadership trainer with nine years of experience working with teams and organizations across the region. He brings practical.</p>
                    <div className="flex flex-row flex-wrap gap-2 pl-4 lg:flex-nowrap lg:pl-0 lg:gap-0">
                        <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-21.5 h-6 ml-0 lg:ml-4 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>Leadership</p>
                        </div>
                         <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-28.5 h-6 ml-2 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>Communication</p>
                        </div>
                         <div className='bg-[#F1F5F9] border border-[#E2E8F0] w-30.25 h-6 ml-0 lg:ml-2 rounded-lg'>
                            <p className={`${style.stylep3} text-gray`}>Entrepreneurship</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between px-4 pl-4 pt-4">
                        <div className='flex flex-row items-center'>
                            <BiAward className='text-[#90A1B9] leading-4 font-medium text-[12px]'/>
                            <p className={`${style.stylep3} text-[#90A1B9]`}>2 courses</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <IoMdBook className='text-[#90A1B9] leading-4 font-medium text-[12px]'/>
                            <p className={`${style.stylep3} text-[#90A1B9]`}>9 yrs exp.</p>
                        </div>
                    </div>
                    <button className={style.stylebtn}>View Profile</button>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}
