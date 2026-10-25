import imgIcon from '../assets/Container.svg'
import { CiMenuBurger } from "react-icons/ci";
let styleLink ="font-jakarta text-gray leading-5 font-semibold text-[14px] hover:text-primary transition cursor-pointer";

export default function Header() {
  return (
   <header className='w-full border-b border-b-[#E2E8F0] flex justify-center overflow-auto'>
     <div className='container w-full max-w-300 flex justify-between  items-center py-4 px-4 lg:px-0'>
       <div className='flex gap-2'>
         <img src={imgIcon}  />
        <h1 className='font-jakarta text-dark  leading-7 font-bold  text-[20px]'>SkillUp <span className='text-primary'>Academy</span></h1>
      </div>
        <nav className='hidden lg:flex gap-7 '>
            <a className={styleLink} href="">Home</a>
            <a className={styleLink} href="">Courses</a>
            <a className={styleLink} href="">Instructors</a>
            <a className={styleLink} href="">About</a>
            <a className={styleLink} href="">Contact</a>
        </nav>
        <button className='myBtn hidden lg:flex'>Explore Courses</button>
        <CiMenuBurger className=' w-5.5 h-5.5 m-2 flex lg:hidden'/>
    </div>
   </header>
  )
}
