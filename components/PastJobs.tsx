"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Cards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 " id="work">
      <h2 className=" flex justify-center items-center max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Past Work Experience
      </h2>
      <h4 className=" flex justify-center items-center max-w-7xl pl-4 mx-auto text-neutral-800 dark:text-neutral-200 font-sans">Click each card to look into my experiences in each company.</h4>
      <Carousel items={cards} />
    </div>
  );
}

const OddleContent = () => {
  return (
    <>
          <div
            key={"Oddle-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-l font-sans max-w-3xl mx-auto">
              Here at Oddle, I worked with clients to address tech-related issues whenever they arose.
              <br/>
              As a result, I worked closely with the Tech Team at Oddle to address bugs as soon as they arose.

              <br/>
              <br/>
              Aside from that, I also worked on building client websites using Oddle&#39;s tools, and customized them to fit the style of whichever restaurant I was building a website for.
              I also managed the inventory of Sunmi and other products at Oddle, sending them to clients whenever they required additional hardware and assistance.
            </p>

            <Image
              src="/Oddle_Sunmi.jpg"
              alt="Digital Diagnostics Team"
              height="700"
              width="700"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain py-1"
            />
          </div>
    </>)
}

const MVPContent = () => {
  return (
    <>
          <div
            key={"MVP-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-l font-sans max-w-3xl mx-auto">
              Here at NUS Enterprise, I was attached to MVP Studios, a software warehouse that takes in clients and produces software solutions for them. 
              <br/>
              Here my team and I focused on designing and building solutions for a large-scale farming company to automate their crop monitoring and harvesting processes.
              Following the Agile workflow, we started each sprint discussing what needed to be done for the week. After finalising the architecture for the features to build for the week (if it was a feature focused sprint), we would then split up and carry out our tasks and consolidate everyone&#39;s work together.
              <br/>
              <br/>
              (One of our whiteboard scribbles after one of the start of sprint stand ups)
            </p>

            <Image
              src="/MVP_UML.jpg"
              alt="Digital Diagnostics Team"
              height="700"
              width="700"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain py-1"
            />
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-l font-sans max-w-3xl mx-auto">
              But aside from the daily standups and weekly sprints, I also greatly enjoyed the company of my fellow developers who were my great lunch buddies.
              <br/>
              They even celebrated my last day with the team as shown below!
            </p>
            <Image
              src="/MVP_Bday2.jpg"
              alt="Digital Diagnostics Team"
              height="700"
              width="700"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain py-1"
            />

          </div>
    </>)
}

const AStarContent = () => {
  return (
    <>
          <div
            key={"AStar-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-l font-sans max-w-3xl mx-auto">
              Here at Diagnostics Development Hub, I was attached to the Digital Diagnostics team. 
              <br/>
              Under this team, I was attached to 2 projects, of which I was involved in maintaining the codebase, fixing bugs and testing new features.
              On the other hand, I also set up the initial stack using AWS stacks that allowed for future ease of deployment.
              I was fortunate enough to have Lijoy George, Ganesh Ramasamay and Chai Wei Ming to mentor me throughout this process.
            </p>
            <Image
              src="/A_Star_Group.jpg"
              alt="Digital Diagnostics Team"
              height="700"
              width="700"
              sizes="90vw, 90vh"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain py-1"
            />
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-l font-sans max-w-3xl mx-auto">
              Outside of work, I was also very grateful for all the lunch buddies and friends made here at DxD Hub, as both people within and outside of my department made the workplace have an extremely warm and lively environment.
            </p>
            <Image
              src="/lunchBig.jpg"
              alt="lunchBig.jpg"
              height="700"
              width="700"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain py-1"
            />
            <Image
              src="/lunchSmall.jpg"
              alt="lunchSmall.jpg"
              height="700"
              width="700"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain py-1"
            />
            
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-l font-sans max-w-3xl mx-auto">
              To top all things off, and something that is emblematic of the people here, would be one of the gifts that I received upon completing my Internship here.
            </p>
            <Image
              src="/psyduck.jpg"
              alt="A Psyduck Plush"
              height="700"
              width="700"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain py-1"
            />
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-l font-sans max-w-3xl mx-auto">
              It&#39;s a Psyduck plushy (a Pokemon). It is beautiful.
            </p>

          </div>
    </>
  )
}

const data = [
  {
    category: "A*STAR - Agency for Science, Technology and Research",
    title: "Software Developer",
    src: "/A_Star_Group.jpg",
    /* src: "/A_Star_Logo_No_BG.png", */
    content: <AStarContent />,
  },
  {
    category: "MVP Studios, NUS Enterprise",
    title: "Full Stack Software Developer",
    src: "/MVP_Bday2.jpg",
    content: <MVPContent />,
  },
  {
    category: "Oddle",
    title: "Tech Intern",
    src: "/Oddle_Sunmi.jpg",
    content: <OddleContent />,
  },
];
