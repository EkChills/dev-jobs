"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function LeftArrow({className}:{className:string}) {
  const router = useRouter();
  return (
    <>
      <FaArrowLeft className={className} onClick={() => router.back()} />
    </>
  );
}
