import {Card , CardHeader} from './ui/card'
import {Github , Link2Icon} from 'lucide-react'
import { Badge } from './ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function ProjectCard({project}) {
  const [open, setOpen] = useState(false);

  return (
    <Card className='group overflow-hidden relative shadow-2xl' onClick={() => setOpen(!open)}>
      <CardHeader>
        {/* image */}
<div className='relative w-full h-[300px] flex items-center justify-center 
                bg-[url("/work/project-bg-light.png")] bg-cover bg-center 
                dark:bg-[url("/work/project-bg-dark.png")] overflow-visible '>
      <Image priority className='absolute bottom-0 shadow-2xl  pt-15' src={project.image} fill alt=''/>
      {/* btns links*/}
      <div  className='absolute inset-0 flex justify-center items-center gap-x-4'>
        <Link href={project.link} className={`bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100  ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all duration-200 `}>
        <Link2Icon className='text-white'/>
        </Link>
        <Link href={project.github} className={`bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100  group-focus:scale-100 ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"}  transition-all duration-200`}>
        <Github className='text-white'/>
        </Link>
        </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard