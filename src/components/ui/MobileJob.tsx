import Image from "next/image"
import Link from "next/link"


const MobileJob = ({logoBackground, logo, company, website}:Job) => {
  return (
    <div className=" flex items-center  fixed flex-col bg-white dark:bg-[#19202D] pt-[3.06rem] rounded-lg left-[1.5rem] pb-8 right-[1.5rem]  top-[7.56rem] sm:hidden z-20">
      <div className="rounded-xl flex items-center absolute top-[-1.5rem] justify-center h-[3.125rem] w-[3.125rem] p-2" style={{
        backgroundColor:logoBackground
      }}>
      <Image src={logo.slice(1)} width={48} height={48} alt={company}  className='' />
      </div>
      <h3 className="font-bold text-[1.25rem]">{company}</h3>
      <p className="text-[#6E8098] font-medium text-[1rem] mt-[.8rem]">{company.replace(" ", "").toLowerCase() + '.com'}</p>
      <Link href={website} className="w-[9.1875rem] h-[3rem] text-center bg-[#5964E0] bg-opacity-[.10000000149011612] text-[#5964E0] mt-[1.69rem] flex items-center justify-center font-bold text-base capitalize rounded-[5px]">
        <p>company site</p>
      </Link>
    </div>
  )
}

export default MobileJob