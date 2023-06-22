import React,{useRef} from "react";
import useClickOutside from "@/hooks/useClickOutside";
import LoginAnimate from "../Providers/LoginAnimate";

export default function FilterModal({setModal}:{setModal:React.Dispatch<React.SetStateAction<boolean>>}) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  useClickOutside(contentRef, () => {
    setModal(false)
  } )
  return (
    <div className="fixed inset-0 w-full bg-opacity-40 z-40 bg-black flex justify-center items-center px-6">
      {/* modal content */}
      <LoginAnimate refEl={contentRef} className="flex space-y-6 flex-col bg-white dark:bg-[#19202D] w-full min-w-[327px] max-w-[30rem] rounded-md">
        <div className="flex items-center space-x-4 w-full border-b p-6 border-b-[#6E8098]">
          <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
              fill-rule="nonzero"
            />
          </svg>
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder:font-[400] placeholder:text-[1rem] placeholder:text-[hsl(0,0%,70%)]"
            placeholder="Filter by title..."
          />
        </div>
        <div className="flex flex-col space-y-6 px-6 pb-6">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-primary"
            />
            <p className="font-bold text-base">Full Time Only</p>
          </div>
          <button className="w-full h-[48px] text-center text-base font-bold bg-[#5964E0] rounded-md hover:opacity-75 transition-opacity duration-300 text-white">
            Search
          </button>
        </div>
      </LoginAnimate>
    </div>
  );
}
