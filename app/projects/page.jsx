'use client'
import ProjectCard from '@/components/ProjectCard';
import {Tabs,TabsList , TabsContent , TabsTrigger} from '@/components/ui/tabs'
import { useState } from 'react';

const projectData =[
  {image: '/work/leon.png',
   category: 'HTML, CSS',
   name : "Leon Project ", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://ahmedabdelelah22.github.io/leon/",
   github: "https://github.com/ahmedabdelelah22"
  },{image: '/work/kasper.png',
   category: 'HTML, CSS',
   name : "Kasper Project ", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://ahmedabdelelah22.github.io/kasper/",
   github: "https://github.com/ahmedabdelelah22"
  },{image: '/work/elzero.png',
   category: 'HTML, CSS',
   name : "Elzero Project", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://ahmedabdelelah22.github.io/elzero/",
   github: "https://github.com/ahmedabdelelah22"
  },{image: '/work/dasborad.png',
   category: 'HTML, CSS',
   name : "Dashboard Project", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://ahmedabdelelah22.github.io/dasborad/",
   github: "https://github.com/ahmedabdelelah22"
  },{image: '/work/imagesearch.png',
   category: 'JavaScript',
   name : "Image Search Engine ", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://ahmedabdelelah22.github.io/Image-Search-Engine/",
   github: "https://github.com/ahmedabdelelah22"
  },{image: '/work/facebook.png',
   category: 'JavaScript',
   name : "social media (Facebook)", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://ahmedabdelelah22.github.io/Facebook/",
   github: "https://github.com/ahmedabdelelah22/Facebook"
  },{image: '/work/product.png',
   category: 'JavaScript',
   name : "Product Page", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://ahmedabdelelah22.github.io/Product-Page/",
   github: "https://github.com/ahmedabdelelah22/Product-Page"
  },
  //================================================================================================
  {image: '/work/agecal.png',
   category: 'JavaScript',
   name : "age calculator ", 
   description:"A dynamic calculate age by javascripte enter your birthday output your age  .",
   link:"https://ahmedabdelelah22.github.io/Age-Calculator/",
   github: "https://github.com/ahmedabdelelah22/Age-Calculator"
  },{image: '/work/password.png',
   category: 'JavaScript',
   name : "Generate a Random Password", 
   description:"A dynamic Generate a Random Password",
   link:"https://kaleidoscopic-kataifi-146a83.netlify.app/",
   github: "https://ahmedabdelelah22.github.io/Password-Generator/"
  },{image: '/work/qr.png',
   category: 'JavaScript',
   name : "Qenerate QR Code ", 
   description:"A dynamic app enter  enter your text or url generate QR Code .",
   link:"https://ahmedabdelelah22.github.io/qr-code-generator/",
   github: "https://github.com/ahmedabdelelah22/qr-code-generator"
  },{image: '/work/todolist.png',
   category: 'JavaScript',
   name : "To-Do List", 
   description:"A dynamic app do to list add remove text throw what did.",
   link:"https://ahmedabdelelah22.github.io/To-Do-List/",
   github: "https://github.com/ahmedabdelelah22/To-Do-List"
  },{image: '/work/quizzaapp.png',
   category: 'JavaScript',
   name : "Simple Quize ", 
   description:"A dynamic app users can take quizzes and navigate then get result.",
   link:"https://ahmedabdelelah22.github.io/Quiz-App/",
   github: "https://github.com/ahmedabdelelah22/Quiz-App"
  },{image: '/work/createnote.png',
   category: 'JavaScript',
   name : " Notes Project ", 
   description:"A dynamic app user car create many note and delelate",
   link:"https://ahmedabdelelah22.github.io/Notes-App/",
   github: "https://github.com/ahmedabdelelah22/Notes-App"
  },
  //===================================================================================================
  {image: '/work/pizza-app.png',
   category: 'React js',
   name : "Pizza Menu", 
   description:"A dynamic pizza menu built with React, showcasing reusable components and prop-driven customization.",
   link:"https://pizza-menu-delta-six.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/quizz-app"
  },
  {image: '/work/travel-list.png',
   category: 'React js',
   name : "Travel List", 
   description:"An interactive travel checklist app that allows users to add, edit, and remove destinations .",
   link:"https://travel-list-seven-tau.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/travel-list"
  },
  {image: '/work/eat-n-split.png',
   category: 'React js',
   name : "Eat-n-Split ", 
   description:"A restaurant bill-splitting handling user inputs, live calculations, and interactive UI ",
   link:"https://eat-n-split-seven-psi.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/eat-n-split"
  },
  {image: '/work/popcorn.png',
   category: 'React js',
   name : "usePopcorn ", 
   description:"A movie discovery app that fetches data from external APIs using custom React hooks.  ",
   link:"https://popcorn-bice.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/popcorn-22"
  },
  {image: '/work/quizz-app.png',
   category: 'React js',
   name : "React js", 
   description:"users can take quizzes . Implements complex state transitions using the useReducer hook,.",
   link:"https://quizzapp-gold.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/quizz-app"
  },
  {image: '/work/worldwise.png',
   category: 'React js',
   name : "WorldWise", 
   description:"A travel platform using React Router , Context API for global state, and memoization techniques",
   link:"https://worldwise-22.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/worldWise"
  },
  {image: '/work/wildoasis.png',
   category: 'React js',
   name : "The Wild Oasis (Admin) — Full-Stack Dashboard", 
   description:"An admin dashboard for managing resort data, bookings, and user activities.",
   link:"https://the-wild-oasis-six-sable.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/the-wild-oasis"
  },
    {image: '/work/wildoasis2.png',
   category: 'Next js',
   name : "The Wild Oasis Website — Next.js Server ", 
   description:"website for The Wild Oasis resort, utilizing Next.js server components and actions for optimized performance.",
   link:"https://the-wild-oasis-website-yfgk.vercel.app/",
   github: "https://the-wild-oasis-website-flax-ten.vercel.app/"
  },
 
  {image: '/work/portfoilo.png',
   category: 'Next js',
   name : " PortFolio— Next.js  ", 
   description:"website for PortFolio, utilizing Next.js server components and actions for optimized performance.",
   link:"https://portfolio-nu-sepia-14.vercel.app/",
   github: "https://github.com/ahmedabdelelah22/portfolio"
  },
]

const uniqueCategories = ["all projects" , ...new Set(projectData.map((item) => item.category))];

function Projects() {
  const [categories,setCategories] = useState(uniqueCategories)
  const [category , setCategory] = useState("all Projects")

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects return all projects else filter by category 
    return category === 'all projects' ? project : project.category === category
  })
  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
          </h2> 
          {/* tabs */}
          <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
            <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {
                categories.map((category,index) =>{
                  return <TabsTrigger onClick={()=>setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">{category}</TabsTrigger>
                })
              }
            </TabsList>
            {/* tab content */}
            <div className="mb-8 text-lg xl:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
              {
                filteredProjects.map((project,index)=>{
                  return (
                    <TabsContent value={category} key={index}>
                      <ProjectCard project={project} />
                    </TabsContent>
                  )
                })
              }
            </div>
          </Tabs>
      </div>
    </section>
  )
}

export default Projects