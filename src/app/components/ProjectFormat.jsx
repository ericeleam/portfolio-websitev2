import React from 'react';

const ProjectFormat = ({ title, description, stack, githubLink}) => {
    return (
        <div className="flex flex-col">
            <h5 className="text-[#e7e7e7] text-xl font-extrabold ">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className=" hover:text-[#007bff]">
                {title}
            </a>
            </h5>
            <p className="pt-2 text-[#afafbf] w-3/4 font-amedium">
                {description}
            </p>
            {stack && (
                <div className="pt-2 flex gap-2 pb-5">
                    {stack.split(' ').map((word, index) => (
                        <span
                            key={index}
                            className="text-sm px-1 py-1 font-abold text-[#007bff] border-2 border-[#007bff] "
                        >
                            {word}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectFormat;
