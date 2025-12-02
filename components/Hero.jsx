"use client"
import {Button} from '../components/ui/button'
import { Download, Send } from "lucide-react";
import Link from 'next/link';
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";
import Socials from './Socials';
import { useTheme } from 'next-themes';
import DevImg from './DevImg';
import Badge from './Badge';
import Image from 'next/image';

function Hero() {
    const { theme } = useTheme(); // theme = "light", "dark", or undefined
  return (
    <section className=" h-[100vh]  xl:py-24 xl:pt-20 bg-[url('/hero/hero-bg.png')] bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="container mx-auto ">
          <div className='flex justify-between gap-x-8'>
{/* text */}
<div className='flex items-center xl:items-start max-w-[600px] flex-col justify-center mx-auto xl:mx-0
text-center xl:text-left'>
  <div className='xl:hidden w-[200px] h-[200px] bg-white rounded-full relative  overflow-hidden mb-5'>
    <Image src='/hero/ahmed.png' alt='' fill className='object-cover'/>
  </div>
  <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
  <h1 className='h4 md:h1  mb-4 '>Hello, my name is ahmed abdelelah</h1>
  <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief description with insights info myself, my vocational journey, and what I engage in professionally</p>
  {/* buttons */}
<div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
<Link href='/contact'>
<Button className="gap-x-2" >Contact Me <Send  size={18} /> </Button>
</Link>
 <Button variant="secondary" asChild>
      <a href="/cv.pdf" download="ahmed-abdelelah-cv.pdf">
        Download CV <Download size={18} />
      </a>
    </Button>
</div>
<Socials />
</div>
{/* image */}
<div className='hidden xl:flex relative'>
  <Badge containerStyle='absolute top-[24%] -left-143' icon={<RiBriefcase4Fill />} endCountNum={2} badgeText='Years of Experience' />
  <Badge containerStyle='absolute top-[95%] -left-130' icon={<RiTodoFill />} endCountNum={43} endCountText="" badgeText='Finished Projects' />
  <Badge containerStyle='absolute top-[55%] hidden xl:-left-30 ' icon={<RiTeamFill />} endCountNum={9} endCountText="k" badgeText='happy client' />


  <div className=" w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 bg-[url('/hero/shape-2-light.svg')]  dark:bg-[url('/hero/shape-2-dark.svg')]">
    <DevImg containerStyle=" w-[510px] h-[462px] bg-no-repeat relative bg-bottom bg-[url('/hero/shape-1.svg')] overflow-hidden"  imgSrc={'/hero/ahmed.png'}/>
  </div>
  </div>
{/* icon */}
<div className='hidden md:flex absolute left-2/4 bottom-0 xl:bottom-12 animate-bounce'>
  <RiArrowDownSLine className='text-3xl text-primary'/>
</div>
          </div>
          </div> 
  </section>
  )
}

export default Hero
