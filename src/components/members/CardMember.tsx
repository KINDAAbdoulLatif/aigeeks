"use client"

import {useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image";

export type MemberType = {
    index: number,
    title: string,
    image: string
}


export function CardMember({member}: {member: MemberType}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0, x: 200*member.index},
    animate: { y: 0, opacity: 1, x: 0 },
  };
  return (
    <Card ref={ref} className=" md:w-[280px] md:h-[220px]  flex flex-col justify-center bg-white box-border    ">
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 , delay: member.index * 0.4 }}
        >
      
      <CardContent className="flex flex-col justify-center items-center">
        <div>
            <Image src={member.image} width={128} height={128} alt="member" />
        </div>
        <div>
            <span>{member.title} </span>
        </div>
      </CardContent>
      </motion.div>
    </Card>
  )
}
