import { portfolioData } from "../mock";
import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import type { IconType } from "react-icons/lib";

type SocialIconKey = "github" | "linkedin" | "mail";

const SocialLinks = () => {
  const socialIcons:Record<SocialIconKey, IconType>  = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: MailIcon,
  };
  return (
    <ul className="relative flex gap-6">
      {portfolioData.socialLinks.map((social) => {
        const Icon = socialIcons[social.icon as keyof typeof socialIcons];
        
        return (
        <SocialButton
          key={social.name}
          title={social.name}
          icon={Icon && <Icon />}
          gradientFrom={social.fromColor}
          gradientTo={social.toColor}
          url={social.url}
        />
      )})}
    </ul>
  );
};

export default SocialLinks;

interface Props {
  icon:any,
  title:string,
  gradientFrom:string,
  gradientTo:string,
  url:string
}

const SocialButton = ({ icon, title, gradientFrom, gradientTo, url }:Props) => {
  return (
    <a
      href={url}
      className="group relative list-none w-15 h-15 bg-white rounded-[60px] 
      shadow-lg flex justify-center items-center cursor-pointer 
      transition-all duration-500 hover:w-45 hover:shadow-none"
    >
      <span
        className="absolute inset-0 rounded-[60px] opacity-0 transition-all duration-500 
        group-hover:opacity-100"
        style={{
          background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <span
        className="absolute top-2.5 w-full h-full rounded-[60px] opacity-0 blur-[15px] 
        transition-all duration-500 -z-10 group-hover:opacity-50"
        style={{
          background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <span
        className="text-[#777] text-[1.75em] absolute transition-all duration-500 
        delay-200 group-hover:scale-0 group-hover:text-white group-hover:delay-0"
      >{icon}</span>
      <span
        className="text-white text-[1.1em] tracking-widest uppercase 
        scale-0 transition-all duration-500 group-hover:scale-100 
        group-hover:delay-200"
      >
        {title}
      </span>
    </a>
  );
};
