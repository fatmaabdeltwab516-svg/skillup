import {BiLayer} from 'react-icons/bi'
import {BiTrendingUp} from 'react-icons/bi'
import {BiAward} from 'react-icons/bi'
import {FiTarget} from 'react-icons/fi'

let style ={
    styleh2:"font-jakarta text-dark leading-6 font-bold text-[16px] pt-4 ",
    stylep:"font-jakarta text-gray leading-5.5 font-[400px] text-[14px] text-center pt-2",
    stylecard:"flex flex-col items-center bg-white  border border-[#E2E8F0] shadow-[#0000001A] rounded-2xl w-67.5 p-6"
}

export default function SectionFour() {
  return (
    <div className=' w-full flex justify-center bg-[#F8FAFC] py-12 overflow-auto'>
        <div className="contaner w-full max-w-300 flex flex-col items-center">
            <h1 className='font-jakarta text-dark leading-12 font-bold text-[30px] lg:text-[38px] text-center'>Why Learn With Us</h1>
        <p className='font-jakarta text-gray leading-7.25 font-[400px] text-[16px] pt-5 pb-10  text-center'>Everything we build is designed around one goal — helping you get results you can use.</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div className={style.stylecard}>
                <div className='bg-[#EEF2FF] w-12 h-12 flex justify-center items-center rounded-lg '>
                    <BiLayer className='text-purple w-5.5 h-5.5  '/>
                </div>
                <h2 className={style.styleh2}>Practical Projects</h2>
                <p className={style.stylep}>Every course includes real-world projects you can add directly to your portfolio.</p>
            </div> 
            <div className={style.stylecard}>
                <div className='bg-[#EEF2FF] w-12 h-12 flex justify-center items-center rounded-lg'>
                    <BiAward className='text-purple w-5.5 h-5.5'/>
                    
                </div>
                <h2 className={style.styleh2}>Expert Instructors</h2>
                <p className={style.stylep}>Learn from professionals with years of industry and teaching experience.</p>
            </div>
            <div className={style.stylecard}>
                <div className='bg-[#EEF2FF] w-12 h-12 flex justify-center items-center rounded-lg'>
                    <BiTrendingUp className='text-purple w-5.5 h-5.5'/>
                 
                </div>
                   <h2 className={style.styleh2}>Career-Focused Content</h2>
                    <p className={style.stylep}>Curriculum designed around the skills that employers and clients actually need.</p>
            </div>
            <div className={style.stylecard}>
                <div className='bg-[#EEF2FF] w-12 h-12 flex justify-center items-center rounded-lg'>
                    <FiTarget className='text-purple w-5.5 h-5.5'/>
                    
                </div>
                <h2 className={style.styleh2}>Flexible Learning</h2>
                <p className={style.stylep}>Study at your own pace with structured sessions and clear learning objectives.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
