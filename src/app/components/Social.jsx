import React from 'react'
import Link from 'next/link'
import { FiLinkedin, FiGithub, FiMail} from 'react-icons/fi'

const socials = [
    {
        icon: <FiLinkedin />,
        link: 'https://www.linkedin.com/in/ericeleam'
    },
    {
        icon: <FiGithub />,
        link: 'https://github.com/ericeleam'
    },
    {
      icon: <FiMail />,
      link: 'mailto:eric.eleam@temple.edu'
    },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
       {socials.map((social, index) => {
        return (
        <Link key={index} href={social.link} className={iconStyles} target="_blank" rel="noopener noreferrer">
        {social.icon}
        </Link>
        );
       })}
    </div>
  )
}

export default Social