"use client"
import  Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {motion} from  "framer-motion"

const links = [
    {path: '/' , name:'home'},
        {path: '/projects' , name:'my projects'},
    {path: '/contact' , name:'contact'},
]

function Nav({containerStyles, linkStyles , underlineStyles}) {
    const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
        {
        links.map((link , index)=>(
            <Link  
          key={index}
          href={link.path}
          className={`${linkStyles}  capitalize`}>
            
            
        {link.path === path && (
            <motion.span
            initial={{y:"-100%"}}
            animate={{y:0}}
            transition={{type:'tween'}}
            layoutId='underline'
            className={`${underlineStyles}`}
            >

            </motion.span>
        )}  
            
            {link.name}
            
            </Link>
        ))
    }
    </nav>
  )
}

export default Nav