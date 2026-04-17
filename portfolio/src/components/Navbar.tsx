import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="grid h-screen place-content-center bg-neutral-100">
      <SlideTabs />
    </div>
  );
}

function SlideTabs() {
  const [position, setPosition] = useState({
    left: 60,
    with: 150,
    opacity: 1,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>About Me</Tab>
      <Tab setPosition={setPosition}>Skills</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Contact Me</Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    ></motion.li>
  );
};
