import React from 'react';

const AboutMeSection = () => {
    return (
        <div className="flex flex-row py-40 px-60">
            {/* Main About Me Header */}
            <h1 className="text-2xl font-extrabold text-[#007bff] pt-20 pl-20">
                    BACKGROUND
            </h1>

            {/* About Me Content */}
            <div className="text-[#afafbf] text-xl font-extralight w-4/5 pt-10 pl-20">
            <p className="pt-10">
                Hi! I&apos;m Eric, a dynamic and engaged student thriving at 
                <span className="font-bold text-[#e7e7e7]"> Temple University. </span>
            </p>
            <p className='pt-5'>
                I find interest in integrating code to solve different real world&apos;s challenges, and my pursuit of a Computer Science degree enables me to live with 
                <span className="font-bold text-[#e7e7e7]"> purpose. </span>
            </p>
            <p className='pt-5'>
            <span className="font-bold text-[#e7e7e7]"> When I&apos;m not infront of a computer, </span>
                I spend time playing soccer and chess, aspiring to constantly improve in both.
            </p>
            <p className='pt-5'>
                I am excited to share my journey with you, and I hope you enjoy the content I create!
            </p>
            </div>
        </div>
    );
};

export default AboutMeSection;