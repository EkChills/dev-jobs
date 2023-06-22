"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";
import FilterModal from "./modals/FilterModal";
import ReactDOM from "react-dom";

export default function SearchFilters() {
  const { theme, systemTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  console.log(isModalOpen);

  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);

  return (
    <>
      <div className=" flex items-center px-4 justify-between fixed bg-white dark:bg-[#19202D] h-[80px] rounded-lg left-[1.5rem] right-[1.5rem]  top-[96px] sm:hidden z-20">
        <input
          type="text"
          className="w-full bg-transparent outline-none placeholder:font-[400] placeholder:text-[1rem] placeholder:text-[hsl(0,0%,70%)]"
          placeholder="Filter by title..."
        />
        <div className="flex items-center space-x-6">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsModalOpen(true)}
          >
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              className={`${
                currentTheme === "dark" ? "fill-[#ffffff]" : "fill-[#6E8098]"
              } hover:cursor-pointer`}
              // fill="#6E8098"
              // fill={`${currentTheme === "dark" ? "#ffffff" : "#6E8098"}`}
              fill-rule="nonzero"
            />
          </svg>
          <div className="w-[48px] h-[48px] rounded-md bg-[#5964E0] grid place-items-center cursor-pointer transition-all duration-300 hover:brightness-150 ">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                className="fill-white"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>
        {isModalOpen &&
          ReactDOM.createPortal(
            <FilterModal setModal={setIsModalOpen} />,
            document.body as HTMLElement
          )}
      </div>

      <div className=" hidden  sm:flex items-center justify-between bg-white dark:bg-[#19202D] h-[80px] rounded-lg fixed top-[96px] z-20  sm:inset-x-[2.5rem]  lg:inset-x-[10.313rem]">
        <div className="flex items-center space-x-4 py-6 px-8 grow-[1.5] border-r border-r-[#6E8098] border-opacity-[0.2] ">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
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
        <div className="flex items-center space-x-4 px-8 grow py-6 border-r border-r-[#6E8098]  border-opacity-[0.2]">
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
        <div className=" flex items-center pl-8 pr-4">
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-primary"
          />
          <p className="text-base font-bold ml-4  lg:hidden">Full time</p>
          <p className="text-base font-bold ml-4  hidden lg:block">Full time only</p>
          <button className="w-full h-[48px] text-center text-base font-bold bg-[#5964E0] rounded-md hover:opacity-75 transition-opacity duration-300 text-white max-w-[80px] ml-6">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
