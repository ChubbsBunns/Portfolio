import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Cards } from "@/components/PastJobs";
import RecentProjects from "@/components/RecentProjects";
import BeyondWork from "@/components/ui/BeyondWork";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 py-5 pt-0">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Cards />
        <BeyondWork />
        <Footer />
      </div>
    </main>
  );
}
