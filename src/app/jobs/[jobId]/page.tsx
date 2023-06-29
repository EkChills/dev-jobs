import DesktopJob from "@/components/ui/DesktopJob";
import MobileJob from "@/components/ui/MobileJob";
import { getJob } from "@/lib/getJobs";
import { baseUrl } from "@/utils/baseUrl";
import { error } from "console";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { jobId: string };
}) => {
  const { jobId } = params;
  const res = await fetch(`${baseUrl}/api/jobs/${jobId}`);
  if (!res.ok) {
    throw new Error("something went wrong ");
  }
  const singleJob: { job: Job } = await res.json();

  return {
    title: `${singleJob.job.company} page`,
    description: singleJob.job.description,
  };
};

export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/api/jobs`);
  const data: { jobs: Job[]; nextCursor: string } = await res.json();

  return data.jobs.map((job) => ({
    jobId: job.id,
  }));
}

export default async function SingleJob({
  params,
}: {
  params: { jobId: string };
}) {
  const { jobId } = params;
  const res = await fetch(`${baseUrl}/api/jobs/${jobId}`);
  if (!res.ok) {
    throw new Error("something went wrong ");
  }
  const singleJob: { job: Job } = await res.json();
  const {postedAt, contract, position, location, description} = singleJob.job

  return (
    <div className="px-[1.5rem] sm:px-[2.5rem] lg:px-[10.313rem] pb-[3.88rem] sm:pb-[10.31rem] lg:pb-[13rem] xl:px-[22.19rem] pt-[22.45rem] sm:pt-[18.25rem]">
      {singleJob.job && (
        <>
          <MobileJob {...singleJob.job} />
          <DesktopJob {...singleJob.job} />
        </>
      )}
      <div className="flex flex-col py-[2.5rem] px-[1.5rem] bg-[#fff] dark:bg-[#19202D] rounded-lg">
        <div className="flex flex-col space-y-[3.13rem] sm:flex-row sm:space-y-0 sm:justify-between sm:items-center">
          <div className="flex flex-col space-y-[.69rem] sm:space-y-[.87rem]">
            <div className="flex items-center space-x-[.75rem] text-base text-[#6E8098] font-medium ">
              <span>{postedAt}</span>
              <span className="w-[.25rem] h-[.25rem] rounded-full bg-[#6E8098]" />
              <span>{contract}</span>
            </div>
            <h3 className="text-[1.25rem] sm:text-[1.75rem] font-bold capitalize">{position}</h3>
            <p className="font-bold text-[.875rem] text-[#5964E0]">{location}</p>
          </div>
            <button className="w-full h-[3rem] bg-[#5964E0] rounded-[.3125rem] text-center font-bold text-base sm:w-[8.8125rem] hover:brightness-125 text-white transition-all duration-500">Apply Now</button>
        </div>
        <div className="mt-[2rem] sm:mt-[2.75rem]">
          <p className="font-medium text-[#9DAEC2] text-base leading-[1.625rem] ">{description}</p>
        </div>
      </div>
    </div>
  );
}
