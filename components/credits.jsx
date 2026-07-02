import React from "react";

const Credits = (props) => {
 return (
 <div data-section id="credits" className="group mt-32">
 <div className="text-surface-600">
 <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
 <div className="flex flex-row gap-6">
 <a
 href="/imprint"
 rel="noopener noreferrer"
 className="scroll-auto transition-all hover:text-on-background"
 >
 Imprint
 </a>
 <a
 href="/privacy"
 rel="noopener noreferrer"
 className="scroll-auto transition-all hover:text-on-background"
 >
 Privacy Statement
 </a>
 </div>
 <p className="text-sm">
 Built with{" "}
 <a
 href="https://nextjs.org"
 target="_blank"
 rel="noopener noreferrer"
 className="transition-all hover:text-on-background"
 >
 Next.js
 </a>{" "}
 and{" "}
 <a
 href="https://tailwindcss.com"
 target="_blank"
 rel="noopener noreferrer"
 className="transition-all hover:text-on-background"
 >
 Tailwind CSS
 </a>
 </p>
 <span>
 {props.data.name} | {new Date().getFullYear()}
 </span>
 </div>
 </div>
 </div>
 );
};

export default Credits;
