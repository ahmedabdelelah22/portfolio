"use client"
import { 
  RiFacebookFill, 
  RiInstagramFill, 
  RiTwitterFill, 
  RiLinkedinBoxFill,
  RiGithubFill
} from 'react-icons/ri';


function Socials({color}) {
  return (
   <div className="mx-auto sm:mx-auto xl:mx-0  flex gap-4 ">
  <a 
    href="https://facebook.com/ahmed.abdelelah.924771" 
    target="_blank" 
    rel="noopener noreferrer"
    className= {`hover:text-blue-500 transition-colors duration-300 text-${color} dark:text-white`}
  >
    <RiFacebookFill size={24} />
  </a>

  <a 
    href="https://instagram.com/a7med.abdelelah" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`hover:text-pink-500 transition-colors duration-300 text-${color} dark:text-white`}
  >
    <RiInstagramFill size={24} />
  </a>

  <a 
    href="https:/a7medabdelelah/twitter.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`  transition-colors duration-300 text-${color} dark:text-white hover:text-sky-400`}
  >
    <RiTwitterFill size={24} />
  </a>

  <a 
    href="https://linkedin.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`hover:text-blue-700 transition-colors duration-300 text-${color}  dark:text-white`}
  >
    <RiLinkedinBoxFill size={24} />
  </a>

  <a 
    href="https://github.com/ahmedabdelelah22" 
    target="_blank" 
    rel="noopener noreferrer"
    className= {`hover:text-black transition-colors duration-300 text-${color} dark:text-white`}
  >
    <RiGithubFill size={24} />
  </a>
</div>

  )
}

export default Socials