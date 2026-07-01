import React from "react";
import Image from "next/image";

const Socials = (props) => {
 const { email, linkedin } = props.data;

 return (
 <div className="flex flex-row items-center flex-wrap gap-4">
 {email && !email.startsWith("[") && (
 <a
 href={`mailto:${email}`}
 className="transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-8 rounded flex flex-row justify-center items-center"
 >
 <span>Get in touch</span>
 </a>
 )}
 {linkedin && !linkedin.startsWith("[") && (
 <a
 href={linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="flex flex-row content-center justify-center"
 >
 <Image
 src="/logos/linkedin-mark-white.png"
 alt="LinkedIn Logo"
 width={20}
 height={20}
 className="object-contain object-top mr-2"
 />
 <div>LinkedIn</div>
 </a>
 )}
 </div>
 );
};

export default Socials;
