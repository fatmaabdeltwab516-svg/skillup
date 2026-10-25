
let style={
    styleh1:"font-jakarta text-white leading-12 font-bold text-[30px] lg:text-[38px]  text-center",
    stylep:"font-jakarta  text-white  leading-7.5 font-[400] text-[18px] pt-[16px] text-center",
    stylebtn:"bg-white w-[230px] mt-[32px] px-2 py-2.5  rounded-[10px] font-jakarta leading-5 font-semibold text-[14px] text-primary border-[0.69px] border-[#C6D2FF]",
}

export default function Section6() {
  return (
    <div className='w-full flex justify-center  bg-primary overflow-auto'>
        <div className="container w-full max-w-300 py-20 flex flex-col items-center px-2 lg:px-0 ">
            <h1 className={style.styleh1}>Ready to Start Learning?</h1>
            <p className={style.stylep}>Explore our available courses and choose the learning path that fits your goals.</p>
            <button className={style.stylebtn}>Browse All Courses</button>
        </div>
    </div>
  )
}
