import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black">
      <TextParallaxContent
              imgUrl="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1716206289~exp=1716209889~hmac=c3dcbe8ea0132a1f40d7ad8052ad0d80e38bb1e49831fa93881ea8be71d5f653&w=996"
        subheading="Source codes & Themes"
        heading="Coding Marketplace"
      >
        <ExampleContent link="/marketplace" desc="Coding Marketplace" services={["Our coding marketplace connects talented developers with businesses in need of custom software solutions. By fostering a vibrant community of coders and clients, we facilitate the development of high-quality software projects, ensuring efficient and effective solutions for various technological challenges"]}/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?t=st=1716206364~exp=1716209964~hmac=e15792ec838b6c1b9ab244a374ce2dfa163ffc4ba01153993a50f51ea1f6940b&w=996"
        subheading="Blockchain and Web3 Developments"
        heading=" `RK Tech Blockchain` "
      >
        <ExampleContent link="/rk-tech-blockchain" desc="Blockchain and Web3 Developments" keyOffering={["We are pioneering advancements in blockchain and web3 technologies, developing secure, transparent, and decentralized applications that drive the future of the internet. Our expertise in blockchain allows us to create innovative solutions that enhance trust, security, and efficiency across various industries."]}/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169860.jpg?t=st=1716206187~exp=1716209787~hmac=4cdf2540f46de71f94528dbdaec660b98119e2594a4b5e71b50a4b6231b1e935&w=996"
        subheading="Softwares for corporate world"
        heading="ERP and CRM Software Solutions"
      >
        <ExampleContent link="/crm-erp" desc="ERP and CRM Software Solutions" services={["RK Tech excels in developing robust, scalable, and customizable ERP and CRM software solutions. Our systems streamline business operations, boost productivity, and facilitate seamless communication within organizations, helping businesses stay competitive in today's fast-paced market."]}/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://img.freepik.com/free-photo/beautiful-cryptocurrwncy-concept_23-2149250205.jpg?t=st=1716206477~exp=1716210077~hmac=c40f16729d06066f901c0ad1cb77456ff452967afe2e2e9f455b6e35a1308137&w=900"
        subheading="Apis, sockets, live feed, trading softwares"
        heading=" Exchange and Trading Software Development"
      >
        <ExampleContent link="/softwares" desc=" Exchange and Trading Software Development" services={["Our team specializes in creating sophisticated exchange and trading software. We develop platforms that offer real-time trading capabilities, high security, and advanced analytics, catering to the needs of financial institutions and individual traders alike."]}/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898688.jpg?t=st=1716206530~exp=1716210130~hmac=d559334ac0ce1ae48825c7d1dc951fcd460a8879b211a98ceb7385960c9ae37a&w=996"
        subheading="Educating VFX, Games development, Ethical Hacking etc"
        heading="CodexAayaam Education"
      >
        <ExampleContent link="/codexAayaam-education" desc="CodexAayaam Education" keyOffering={["Through CodexAayaam, we offer educational programs in Blockchain, AI, Ethical Hacking, VFX, Game Development, and Full Stack Development. Our courses are designed to equip individuals with the knowledge and skills needed to excel in these cutting-edge fields, fostering the next generation of tech innovators"]}/>
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[100vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = (useTransform(scrollYProgress, [0, 1], [1, 0.85]));
  const opacity = (useTransform(scrollYProgress, [0, 1], [1, 0]));

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        transition: { duration: 0.3 }, // Adjust duration for smoother scrolling

      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y =
    useTransform(scrollYProgress, [0, 1], [250, -250])

  const opacity =
    useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])


  return (
    <motion.div
      style={{
        y,
        opacity,
        transition: { duration: 0.3 }, // Adjust duration for smoother scrolling

      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({desc, services, keyOffering, link}) => {
    const navigate = useNavigate();
    return(
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl text-white font-bold md:col-span-4">
    Sector: {desc}   
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-200 md:text-2xl">
       {services ? "Services and Products:" : "Key Offerings:"}
      </p>
      <ul className="mb-8 text-xl text-neutral-300 md:text-2xl">
      {services ? services.map((val)=>{
        return(
        <li>- {val}</li>
        )
      }) : keyOffering.map((val)=>{
        return(
        <li>- {val}</li>
        )
      })}
      </ul>
      <button onClick={()=>{navigate(`${link}`)}} className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
)};