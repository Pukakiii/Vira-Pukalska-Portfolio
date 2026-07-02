function ProjectItem(props) {
 return (
 <a
 href={props.href || "#"}
 target={props.href ? "_blank" : undefined}
 rel={props.href ? "noopener noreferrer" : undefined}
 className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-105 brightness-75 hover:brightness-100 hover:z-10"
 >
 <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
 <div className="text-surface-600 text-xs">{props.description}</div>
 </a>
 );
}

export default ProjectItem;
