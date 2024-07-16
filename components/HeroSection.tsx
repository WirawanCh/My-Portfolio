"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/2.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Wirawan!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-500">
              Programmer{" "}
            </span>

            <span>with experience in both Front End and Back End development. I have worked for companies related to IoT systems within factories, including creating websites for internal organizational use. Most of my work within the factory systems focuses on the front end, while I handle both front end and back end development for the internal websites.</span>
          </p>

          <p> <span>  สวัสดีค่ะ ดิฉันเป็นโปรแกรมเมอร์ ที่มีประสบการณ์ทางด้าน Front End และ Back End ในการทำงานในบริษัทที่เกี่ยวข้องกับระบบIOTภายในโรงงาน รวมทั้งจัดทำเว็บไซต์สำหรับใช้งานภายในองค์กร ซึ่งส่วนใหญ่ดิฉันจะทำในส่วนของ front end ในการทำงานภายในระบบของโรงงาน และทำทั้งส่วนของ front end และ back end ในการจัดทำเว็บไซต์สำหรับใช้งานภายในองค์กร </span></p>
         
         <div className="mt-10">
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-500 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          </div>


        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center mt-10">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
