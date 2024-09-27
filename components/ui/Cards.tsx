"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { FaFileDownload } from "react-icons/fa";

export function ThreeDCardDemo({
    downloadLink
}: {
    downloadLink: string;
}) {
  const downloadTestimonial = () => {
    const url = downloadLink
    const link = document.createElement('a');
    link.href = url;
    link.download = url;
    link.click();
  }

  const downloadGaneshAppraisal = () => {
    const url = '/appraisalGanesh.pdf'
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DylanHoShuJie_Ganesh_Appraisal.pdf';
    link.click();
  }

  const downloadArynAppraisal = () => {
    const url = '/appraisalAryn.pdf'
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DylanHoShuJie_Aryn_Appraisal.pdf';
    link.click();
  }

  return (
    <>
    <CardContainer className="inter-var">
      <CardBody className="bg-black-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Ganesh Ramasamay, Senior Engineer
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 pb-4 md:pb-0"
        >
          Senior Engineer at A*STAR Research Agency, Diagnostics Development Hub
        </CardItem>
        <CardItem>
            <MagicButton
                title="Download Testimonial"
                icon={<FaFileDownload />}
                position="right"
                otherClasses="bg-[#161a31]"
                handleClick={downloadGaneshAppraisal}
            />
        </CardItem>
      </CardBody>
    </CardContainer>
    

    <CardContainer className="">
      <CardBody className="inter-var width-100vw bg-black-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        Aryn Choong, Master Engineer
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 pb-4 md:pb-0"
        >
          Master Engineer at NUS Enterprise under MVP Studios
        </CardItem>
        <CardItem>
            <MagicButton
                title="Download Testimonial"
                icon={<FaFileDownload />}
                position="right"
                otherClasses="bg-[#161a31]"
                handleClick={downloadArynAppraisal}
            />
        </CardItem>
      </CardBody>
    </CardContainer>
    </>
  );
}
