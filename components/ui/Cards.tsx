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
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Senior Engineer at A* Star Research Agency, Diagnostics Development Hub
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
    
    {/* <CardContainer className="inter-var">
      <CardBody className="bg-black-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
      </CardBody>
    </CardContainer> */}
    </>
  );
}
