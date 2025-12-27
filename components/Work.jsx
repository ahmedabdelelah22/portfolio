"use client"


import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Button } from './ui/button'
import ProjectCard from './ProjectCard';


const projectData =[


 
  {image: '/work/wildoasis2.png',
   category: 'Next js',
   name : "The Wild Oasis Website — Next.js Server ", 
   description:"website for The Wild Oasis resort, utilizing Next.js server components and actions for optimized performance.",
   link:"https://arun-nextjs-hotel-management-customer-app.vercel.app/cabins",
   github: "/"
  },
    {image: '/work/wildoasis.png',
   category: 'React js',
   name : "The Wild Oasis (Admin) — Full-Stack Dashboard", 
   description:"An admin dashboard for managing resort data, bookings, and user activities.",
   link:"https://the-wild-oasis-six-sable.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/the-wild-oasis-website"
  },
  
  {image: '/work/worldwise.png',
   category: 'React js',
   name : "WorldWise", 
   description:"A travel platform using React Router , Context API for global state, and memoization techniques",
   link:"https://the-wild-oasis-website-yfgk.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/worldWise"
  },
   {image: '/work/quizz-app.png',
   category: 'React js',
   name : "React js", 
   description:"users can take quizzes . Implements complex state transitions using the useReducer hook,.",
   link:"https://quizzapp-gold.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/quizz-app"
  },
]
function Work() {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className="container mx-auto">
        {/* text */}
        <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
        <h2 className='section-title mb-4'>Latest Projects</h2>
        <p className='subtitle mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link href='/projects'><Button>All Projects</Button></Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
 <Swiper
 className='h-[550px]'
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{ 640:{slidesPerView:3}}}
     
    > 
      
        {
          projectData.slice(-4).map((project , index)=>{
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
      </div>
    </section>
  )
}

export default Work