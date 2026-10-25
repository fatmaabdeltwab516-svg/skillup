import imgIcon from '../assets/Container.svg'
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

let style={
     stylep:"font-jakarta  text-[#90A1B9]  leading-5 font-[400] text-[14px] pt-[16px]",
     styleh1:"font-jakarta  text-white  leading-4 font-bold text-[12px] uppercase",
     styleLink :"font-jakarta text-[#90A1B9]  leading-5 font-semibold text-[14px] pt-[16px]",
}

export default function Footer() {
  return (
    <div className='w-full flex justify-center py-12 bg-dark'>
        <div className='container w-full max-w-300 py-14 pl-4'>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-10">
                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <img src={imgIcon}  />
                        <h1 className='font-jakarta text-white  leading-7 font-bold  text-[20px]'>SkillUp Academy</h1>
                    </div>
                    <p className={style.stylep}>
                        Practical technology and business courses built around real-world projects, delivered by experienced instructors.
                    </p>
                    <div className="flex flex-row gap-2 pt-5">
                        <div className="bg-[#1D293D] rounded-full w-8 h-8 flex items-center justify-center">
                            <CiTwitter className='w-3.5 text-[#90A1B9] '/>
                        </div>
                        <div className="bg-[#1D293D] rounded-full w-8 h-8 flex items-center justify-center">
                            <FiFacebook className='w-3.5 text-[#90A1B9] '/>
                        </div>
                        <div className="bg-[#1D293D] rounded-full w-8 h-8 flex items-center justify-center">
                            <FaInstagram className='w-3.5 text-[#90A1B9] '/>
                        </div>
                        <div className="bg-[#1D293D] rounded-full w-8 h-8 flex items-center justify-center">
                            <AiOutlineYoutube className='w-3.5 text-[#90A1B9] '/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className={style.styleh1}>Quick Links</h1>
                    <nav className='flex flex-col '>
                        <a className={style.styleLink} href="">Home</a>
                        <a className={style.styleLink} href="">Courses</a>
                        <a className={style.styleLink} href="">Instructors</a>
                        <a className={style.styleLink} href="">About</a>
                        <a className={style.styleLink} href="">Contact</a>
                    </nav>
                </div>
                <div className="flex flex-col">
                    <h1 className={style.styleh1}>Categories</h1>
                    <div className="flex flex-col">
                        <p className={style.stylep}>Frontend</p>
                        <p className={style.stylep}>WordPress</p>
                        <p className={style.stylep}>Backend</p>
                        <p className={style.stylep}>Leadership</p>
                        <p className={style.stylep}>Entrepreneurship</p>
                    </div>
                </div>
                <div className="flex flex-col">
                     <h1 className={style.styleh1}>Contact</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-2 ">
                            <HiOutlineMail className='w-3.5 text-[#90A1B9] mt-4'/>
                            <p className={style.stylep}>info@skillupacademy.com</p>
                        </div>
                        <p className={style.stylep}>Available Sun – Thu, 9am – 5pm</p>
                    </div>
                </div>
            </div>
            <hr className='w-full h-10 text-[#1D293D] mt-12' />
            <div className="flex flex-row justify-between">
                <p className={style.stylep}>© 2026 SkillUp Academy. All rights reserved.</p>
                <p className={style.stylep}>Privacy Policy - Terms of Use</p>
            </div>
        </div>
    </div>
  )
}
