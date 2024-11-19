import React from 'react';
import ProjectFormat from './ProjectFormat';

const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Hand-coded website that showcases my background, experience and projects. Helping to connect with others!",
      stack: "React JavaScript TailwindCSS Next.js",
      githubLink: "https://github.com/ericeleam/"
    },
    
    // Add more projects as needed *reverse stack order*
  ];

const ProjectSection = () => {
    return (
        <div className="flex flex-row pl-60 py-20 ">
            {/* Project Header */}
            <h1 className="text-2xl font-extrabold text-[#007bff] mb-10 pl-32">
                PROJECTS
            </h1>
            <h1 className="flex flex-col pl-20">
                {/* Project Format */}
                {projectsData.map((project) => (
                    <ProjectFormat
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        stack={project.stack}
                        githubLink={project.githubLink}
                    />
                ))}
            </h1>
        </div>
    );
};

export default ProjectSection;