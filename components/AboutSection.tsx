import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Figma" },
  { skill: "Adobe XD" },
  { skill: "Adobe Photoshop" },
  { skill: "Inkscape" },
  { skill: "VueJS" },
  { skill: "HTML" },
  { skill: "Javascript" },
  { skill: "CSS" },
  { skill: "Vuetify" },
  { skill: "Quasar" },
  { skill: "Bootstrap" },
  { skill: "Node.js" },
  { skill: "Mongodb" },
  { skill: "Docker" },
  { skill: "Node-red" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Wirawan. I graduated from{" "}
              <span className="font-bold">Prince of Songkla University</span>,
              Hat Yai Campus in 2019 with a Bachelor&apos;s degree in Computer
              Science and have been working in this field for 2 years.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and interests that keep me busy,
              including reading, traveling, painting, video editing, and
              experimenting with new web development frameworks beyond my
              regular work. I always enjoy learning new things.
            </p>
            <br />

            <p>
              I believe that we should{" "}
              <span className="font-bold text-teal-500">
                never stop growing 🙂
              </span>{" "}
              and that&#39;I have a passion for technology because it allows me
              to continually develop myself. I am excited to see where my career
              takes me, and I am always open to new opportunities.
            </p>

            <br />

            <p>
              สวัสดีค่ะ, ดิฉันชื่อนางสาว วิราวรรณ ชูแก้ว
              จบการศึกษาจากมหาวิทยาลัย{" "}
              <span className="font-bold">{"สงขลานครินทร์"}</span>,
              วิทยาเขตหาดใหญ่ในปี 2019 ด้วยปริญญาตรี
              สาขาวิทยาการคอมพิวเตอร์และได้ทำงานด้านนี้มาเป็นเวลา 2 ปี
            </p>
            <br />
            <p>
              และดิฉันมีงานอดิเรกและความสนใจหลากหลายที่ทำให้ดิฉันไม่ว่างอยู่เสมอ
              ไม่ว่าจะเป็นการอ่านหนังสือ ท่องเที่ยว วาดภาพ
              จนถึงการตัดต่อคลิปวิดีโอ และทดลองเขียนเว็บไซต์ด้วย Frame work
              ใหม่ๆที่นอกเหนือจากการทำงาน และชอบที่จะเรียนรู้สิ่งใหม่ ๆ ตลอดเวลา
            </p>
            <br />

            <p>
              ฉันเชื่อว่าคนเรา{" "}
              <span className="font-bold text-teal-500">
                ควรเติบโตอยู่เสมอ 🙂
              </span>{" "}
              ดิฉันมีความชื่นชอบในเทคโนโลยีเพราะมันช่วยให้ดิฉันพัฒนาตัวเองได้ตลอดเวลา
              ดิฉันมีความรู้สึกตื่นเต้นและคาดหวังว่าจะได้เห็นความก้าวหน้าและโอกาสในอนาคตของเส้นทางอาชีพของดิฉันว่าจะนำพาดิฉันไปสู่สิ่งใดบ้าง
              และดิฉันยินดีรับโอกาสใหม่ ๆ เสมอค่ะ
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/sapiens.png"
              alt=""
              width={725}
              height={725}
              className="hidden md:block md:relative md:bottom-4 md:left-10 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
