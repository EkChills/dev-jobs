interface Props {
position:string;
company:string;
}

const PageFooter = ({position, company}:Props) => {
  
  return (
    <div className="flex absolute inset-x-0 bottom-[-5rem] sm:bottom-0 min-h-[6rem] items-center justify-center sm:justify-between bg-white dark:bg-[#19202D] px-[1.5rem] sm:px-[2.5rem] lg:px-[10.313rem] xl:px-[22.19rem]">
      <div className="hidden sm:flex flex-col space-y-[.75rem] capitalize">
        <h3 className="text-[1.25rem] font-bold text-[#19202D] dark:text-white">{position}</h3>
        <p className="text-base text-[#6E8098] font-medium">{company}</p>
      </div>
      <button className="w-full bg-[#5964E0] text-base text-white font-bold text-center h-[3rem] rounded-md sm:w-[8.8125rem] hover:brightness-125 transition-all duration-300">
        Apply Now 
      </button>
    </div>
  )
}

export default PageFooter