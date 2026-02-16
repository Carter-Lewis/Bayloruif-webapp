import React from 'react'

interface ProjectCardProps {
    title: string;
    link: string;
}

const ProjectCard = ({ title, link }: ProjectCardProps) => (
    <div className={"flex flex-col items-center justify-center border-black border-l-2 p-8 w-full max-w-3xl mx-auto mt-16"}>
        <h1 className={"text-6xl font-black"}>{title}</h1>
        <p className={"text-center"}>Our marquee project, Sic 'Em Sampling and Sic 'Em Scales, in partnership with Baylor <br/>Eats, the Baylor Office of Sustainability and Student Life Well-Being Initiatives, aimed,<br/>at creating a sustainable future in on-campus residential dining facilities.</p>
        <div className={"border-black border-1 rounded-lg p-4 w-full max-w-xl mx-auto mt-8 text-center"}>
            <a href={link} className={"text-black"}>Learn More</a>
        </div>
    </div>
);

export default ProjectCard;