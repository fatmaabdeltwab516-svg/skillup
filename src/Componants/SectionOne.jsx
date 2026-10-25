import imgHero from '../assets/imgHero.svg'
import imgIcon from '../assets/Container (1).svg'
import { FaStar } from "react-icons/fa";

export default function SectionOne() {
  return (
    <div className="w-full flex justify-center">
        <div className='container w-full max-w-300 flex justify-center py-16 px-4 lg:py-24 lg:px-0'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <div className='bg-[#EEF2FF] w-48.5 border border-[#E0E7FF] rounded-lg '>
                    <div className="flex flex-row items-center px-3 py-1.5 gap-0.5">
                        <FaStar className='w-2.75 text-primary'/>
                        <span className='font-jakarta text-primary  leading-4 font-bold  text-[12px]'>Trusted by 700+ students</span>
                    </div>
                </div>
                <div className='w-full max-w-136'>
                    <h1 className=' font-jakarta text-dark  leading-17 font-extrabold  text-[40px] lg:text-[52px]'>Learn Skills That Move Your Career Forward</h1>
                    <p className='font-jakarta text-gray leading-7.25 font-[400px] text-[18px] pt-5'>Practical technology and business courses delivered by experienced instructors and designed around real-world projects.</p>
                    <div className='w-49.25 flex flex-col lg:flex-row gap-3 py-8'>
                        <button className='myBtn'>Explore Courses</button>
                        <button className='lighBtn'>Meet Our Instructors</button>
                    </div>
                    <div className='flex gap-6'>
                       <div className='flex flex-col'>
                          <h3 className='font-jakarta text-dark  leading-8 font-extrabold  text-[24px]'>20+</h3>
                        <p className='font-jakarta text-secondery leading-4 font-[400px] text-[12px]'>Practical Courses</p>
                       </div>
                       <div className='flex flex-col'>
                          <h3 className='font-jakarta text-dark  leading-8 font-extrabold  text-[24px]'>10+</h3>
                        <p className='font-jakarta text-secondery leading-4 font-[400px] text-[12px]'>Expert Instructors</p>
                       </div>
                       <div className='flex flex-col'>
                          <h3 className='font-jakarta text-dark  leading-8 font-extrabold  text-[24px]'>700+</h3>
                        <p className='font-jakarta text-secondery leading-4 font-[400px] text-[12px]'>Students Enrolled</p>
                       </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-136 relative mt-12 lg:mt-0'>
                <img src={imgHero} className='w-full rounded-2xl mt-8' alt="" />
                <div className='-left-2 -bottom-4 lg:-left-4  lg:bottom-12 absolute flex items-center gap-3 py-4 px-4.5 border border-[#F1F5F9] bg-white shadow-2xl p-a rounded-2xl'>
                    <img src={imgIcon} alt="" />
                    <div className='flex flex-col'>
                        <h4 className='font-jakarta text-dark  leading-5 font-bold  text-[14px]'>Project-Based Learning</h4>
                        <p className='font-jakarta text-gray leading-4 font-[400px] text-[12px]'>Build real things from day one</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
