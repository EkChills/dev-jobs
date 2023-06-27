"use client";

import React, { useState } from "react";
import JobCard from "./JobCard";
import { getServerSession } from "next-auth";
import ListContainerAnimate from "./Providers/ListContainer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import useSwrInfinite from "swr/infinite";
import axios from "axios";
import { baseUrl } from "@/utils/baseUrl";
import { Job } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import LoadingUi from "./ui/LoadingUi";

const getKey = (pageIndex: number, previousPageData: any) => {
  // reached the end
  if (previousPageData && !previousPageData.jobs) return null;

  // first page, we don't have `previousPageData`
  if (pageIndex === 0) return `http://localhost:3000/api/jobs`;

  // add the cursor to the API endpoint
  return `http://localhost:3000/api/jobs?lastId=${previousPageData.nextCursor}`;
};

export default function JobsList() {
  const [jobsList, setJobsList] = useState<Job[]>([]);
  const [jobLoading, setJobLoading] = useState<boolean>(false);

  const { data, error, isError, isLoading, fetchNextPage, hasNextPage,isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["jobs", "infinite"],
    getNextPageParam: (lastPage:{jobs:Job[], nextCursor:string}) => lastPage.nextCursor,
    queryFn: async ({pageParam=null}) => {
      const res = await axios.get(`${baseUrl}/api/jobs?${pageParam ? `lastId=${pageParam}`: ''}`);
      const data: { jobs: Job[]; nextCursor: string } = await res.data;

      const flattenedJobs = data.jobs.flatMap((jobs) => jobs) 
      setJobsList(flattenedJobs);
      return data;
    },
    keepPreviousData: true,
    retry: false,
  });


  const fakeJobs = Array.from({ length: 9 }, (_, index) => {
    return { id: index };
  });

  const loadMoreJobs = async () => {
    console.log(hasNextPage);
    
    if(!hasNextPage) {
       toast.error('no more jobs to load')
       return
    }
    fetchNextPage()
  };

  if (isLoading) {
    return (
      <>
        <ListContainerAnimate className="pt-[15rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-[4.063rem]  sm:gap-x-[.75rem] lg:gap-x-[1rem] xl:gap-x-8">
          {fakeJobs.map((job) => (
            <LoadingUi key={job.id} {...job} />
          ))}
        </ListContainerAnimate>
        <div className="flex w-full mt-[3rem] sm:mt-[3.5rem] hover:brightness-150 transition-all duration-300">
          <button
            className="w-[8.8125rem] h-[3rem] rounded-md bg-[#5964E0] flex justify-center items-center text-4 font-bold text-white text-center mx-auto"
            onClick={loadMoreJobs}
          >
            {jobLoading ? "loading jobs" : "Load More"}
          </button>
        </div>
      </>
    );
  }

  if (isError) {
    return <div>there was an error</div>;
  }

  return (
    <>
      <ListContainerAnimate className="pt-[15rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-[4.063rem]  sm:gap-x-[.75rem] lg:gap-x-[1rem] xl:gap-x-8">
        {data.pages.flatMap(data => data.jobs).map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </ListContainerAnimate>
      <div className="flex w-full mt-[3rem] sm:mt-[3.5rem] hover:brightness-150 transition-all duration-300">
        {
        <button
          className="w-[8.8125rem] h-[3rem] rounded-md bg-[#5964E0] flex justify-center items-center text-4 font-bold text-white text-center mx-auto"
          onClick={loadMoreJobs}
        >
          {isFetchingNextPage ? "loading jobs..." : "Load More"}
        </button>}
      </div>
    </>
  );
}
