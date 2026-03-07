import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

const BeyondWork = () => {
  return (
    <div className="" id="beyondWork">
      <h1 className='flex justify-center items-center max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
        Beyond Work
      </h1>
      <div className="flex justify-center items-center flex-col">
        <CardContainer className="inter-var">
          <CardBody className="text-center flex justify-center items-center flex-col bg-black-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-auto md:w-[45vw] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Facilitator for Friendzone
            </CardItem>
            <CardItem translateZ="80" className="w-[30vw] mt-4">
              <Image
                src="/Friendzone.jpg"
                height="600"
                width="600"
                className="h-61 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              I participate as a facilitator at Friendzone community events, where I aim to bring people together across varying backgrounds.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="text-center flex justify-center items-center flex-col bg-black-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-auto md:w-[45vw] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Game Developer
            </CardItem>
            <CardItem translateZ="80" className="w-[30vw] mt-4">
              <Image
                src="/game_developer.png"
                height="600"
                width="600"
                className="h-61 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              I engage in communities such as the Game Developer's Guild and SGGA in Singapore, taking part in game jams and am deeply intertwined in the game development community here in SG!
              <br/>
              <br/>
                We were even featured on the Straits Times as seen above!


            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="text-center flex justify-center items-center flex-col bg-black-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-auto md:w-[45vw] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              House Captain for USP/NUS College
            </CardItem>
            <CardItem translateZ="80" className="w-[30vw] mt-4">
              <Image
                src="/House.jpg"
                height="600"
                width="600"
                className="h-61 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              I took up the House Captain position in the University Scholar&#39;s Programme (Now known as NUS College), managing a committee that planned events and welfare for a community with over 200 members.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="text-center flex justify-center items-center flex-col bg-black-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-auto md:w-[45vw] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Leading Mentor
            </CardItem>
            <CardItem translateZ="80" className="w-[30vw] mt-4">
              <Image
                src="/mentor.jpg"
                height="600"
                width="600"
                className="h-61 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              With the Ministry of Social and Family Development, I mentored primary students from vulnerable backgrounds. Here I led 5 other student mentors in planning weekly activities and excursions to enrich the students&#39; learning. (The students are not pictured here for PDPA reasons)
            </CardItem>
          </CardBody>
        </CardContainer>




      </div>

    </div>
  )
}

export default BeyondWork
