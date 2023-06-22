"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ListContainerAnimate({
  children,
  className,
  refEl,
}: {
  children: React.ReactNode;
  className?: string;
  refEl?: React.RefObject<HTMLDivElement>;
}) {
  //   const list = { hidden: { opacity: 0 } }
  // const item = { hidden: { x: -10, opacity: 0 } }

  // return (
  //   <motion.ul animate="hidden" variants={list}>
  //     <motion.li variants={item} />
  //     <motion.li variants={item} />
  //     <motion.li variants={item} />
  //   </motion.ul>
  // )
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={className}
    >
      {children}
    </motion.div>
  );
}
