import React from 'react';

const SkillsSection = () => {
    return (
        <div className="flex flex-row pl-80 py-20 ">
            {/* SKILLS Header */}
            <h1 className="text-2xl font-extrabold text-[#007bff] mb-10 pl-24">
                SKILLS
            </h1>

            {/* Skill Categories: LANGUAGES, FRAMEWORKS, TOOLS */}
            <div className="flex flex-row space-x-20 pl-20"> 
                {/* Languages Section */}
                <div className="flex flex-col">
                    <h2 className="text-[#e7e7e7] text-xl font-extrabold">LANGUAGES</h2>
                    <ul className="pt-2 text-[#afafbf] font-medium">
                        <ul>C</ul>
                        <ul>Python</ul>
                        <ul>Java</ul>
                        <ul>JavaScript</ul>
                        <ul>HTML</ul>
                        <ul>CSS</ul>
                        
                    </ul>
                </div>

                {/* Frameworks Section */}
                <div className="flex flex-col">
                    <h2 className="text-[#e7e7e7] text-xl font-bold">FRAMEWORKS</h2>
                    <ul className="pt-2 text-[#afafbf] font-medium">
                        <ul>React</ul>
                        <ul>Node.js</ul>
                        <ul>Next.js</ul>
                        <ul>Tailwind CSS</ul>
                    </ul>
                </div>

                {/* Tools Section */}
                <div className="flex flex-col">
                    <h2 className="text-[#e7e7e7] text-xl font-bold">TOOLS</h2>
                    <ul className="list-disc pt-2 text-[#afafbf] font-medium">
                        <ul>Git</ul>
                        <ul>GitHub</ul>
                        <ul>Unix</ul>
                        <ul>Linux</ul>
                        <ul>Visual Studio</ul>
                        <ul>Eclipse</ul>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
