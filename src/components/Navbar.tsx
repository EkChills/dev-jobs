import Image from "next/image"
import Toggle from "./Toggle"


export default function Navbar() {
  return (
    <div className={`bg-[url(/assets/mobile/bg-pattern-header.svg)]  bg-cover bg-center sm:bg-[url(/assets/tablet/bg-pattern-header.svg)] lg:bg-[url(/assets/desktop/bg-pattern-header.svg)] bg-no-repeat h-[136px] w-[100%] flex pt-[2rem] fixed z-10 top-0 inset-x-0 sm:pt-[42px] lg:pt-[45px] justify-between px-[1.5rem] sm:px-[2.5rem] lg:px-[10.313rem] `}>
      <Image src="/assets/desktop/logo.svg" className="mb-auto z-50" alt="main logo" width={115} height={32} />
      <Toggle />
    </div>
  )
}


