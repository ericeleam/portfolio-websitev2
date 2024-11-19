import React from 'react';
import Social from './Social';

const LandingSection = () => {
  return (
    <div className="text-[#e7e7e7] text-4xl font-extralight flex flex-col justify-start items-start h-full pt-40 px-20 pl-20">
        {/* Main Landing Header */}
        <h1 >
            Hello!
        </h1>

        {/* Landing Content */}
        <h2 className="pt-20 leading-normal">
             <p>
                I'm 
                <span className="font-bold"> Eric Eleam</span>, 
                a Computer Science 
            </p>
            <p>
                student at 
                <span className="font-bold"> Temple University</span>,
                looking
            </p>
            <p>
            for a chance to connect with others.
            </p>
        </h2>

        {/* Social Media Icons */}
        <Social containerStyles="flex flex-row pt-20" iconStyles="text-4xl pr-10" />
    </div>
    
  );
};

export default LandingSection;