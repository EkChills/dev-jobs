import Image from "next/image"
import Link from "next/link"


const DesktopJob = ({logoBackground, logo, company, website}:Job) => {
  return (
    <div className=" sm:flex items-center  fixed  bg-white dark:bg-[#19202D] rounded-lg sm:inset-x-[2.5rem] lg:inset-x-[10.313rem] xl:inset-x-[22.19rem] h-[8.75rem] top-[7.56rem] hidden z-20 justify-between rounded-tr-md rounded-b-md pr-[2.88rem]">
      <div className="flex items-center space-x-[2.5rem] h-full rounded-b-md">
        <div className="w-[8.75rem] h-full flex items-center justify-center rounded-bl-md" style={{backgroundColor:logoBackground}}>
          <Image src={logo.slice(1)} alt={company} height={23} width={81} />
        </div>
        <div className="flex flex-col space-y-[.81rem]">
          <h4 className="text-[1.5rem] font-bold text-[#19202D] dark:text-white">{company}</h4>
          <p className="text-[#6E8098] font-medium text-[1rem] mt-[.8rem]">{company.replace(" ", "").toLowerCase() + '.com'}</p>
        </div>
      </div>
      <Link href={website} className="w-[9.1875rem] h-[3rem] rounded-[5px] dark:bg-[#fff] text-[#5964E0] dark:text-[#fff] bg-[#5964E0] bg-opacity-[0.10000000149011612] dark:bg-opacity-[0.10000000149011612] font-base capitalize font-bold flex items-center justify-center transition all hover:brightness-50 dark:hover:bg-opacity-25 duration-300">
        <p>company site</p>
      </Link>
    </div>
  )
}

export default DesktopJob