import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  navItems: { name: string; href: string }[];
}

interface TabProps {
  children: any;
  href: string;
  setPosition: any
}
export default function Navbar({ navItems }: Props) {
  return (
    <div>
      <SlideTabs navItems={navItems} />
    </div>
  );
}

function SlideTabs({ navItems }: Props) {
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
      className="relative mx-auto flex w-[50vw] rounded-full border-2 border-black bg-white p-1"
    >
      {navItems.map((item) => (
        <Tab key={item.name} setPosition={setPosition} href={item.href}>
          {item.name}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, href, setPosition }: TabProps) => {
  const ref = useRef<HTMLButtonElement|null>(null);

  const scrollToSection = (href:string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={() => scrollToSection(`#${href}`)}
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
      className="relative z-10 block w-full text-center cursor-pointer px-3 py-1.5 text-xs uppercase text-white font-bold mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </button>
  );
};

const Cursor = ({ position }:{position:any}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    ></motion.li>
  );
};
