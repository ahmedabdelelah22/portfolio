import {Tabs ,TabsContent , TabsList , TabsTrigger} from '@/components/ui/tabs'
import {User2, MailIcon , HomeIcon , PhoneCall , GraduationCap , Calendar , Briefcase, University} from "lucide-react"
import DevImg from './DevImg'
import { FaReact, FaNodeJs, FaGit, FaMicrosoft,FaNetworkWired } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiMongodb, SiTailwindcss, SiBootstrap, SiNetlify, SiVercel } from "react-icons/si";  
const infoData =[
    {
        icon:<User2 size={20}/>,
        text: 'Ahmed Abdelelah'
    },
     {
        icon:<PhoneCall size={20}/>,
        text: '+20 1090949310'
    },
     {
        icon:<MailIcon size={20}/>,
        text: 'ahmedabdelelah909493@gmail.com'
    },
     {
        icon:<Calendar size={20}/>,
        text: 'Born on 22 Jan 2001'
    },
     {
        icon:<GraduationCap size={20}/>,
        text: 'master of compter science'
    },
     {
        icon:<HomeIcon size={20}/>,
        text: 'Egypt , mansura'
    },
]

const qualificationData =[
    {
        title : 'education',
        data : [
            {
                University : 'faculty of comptuer science and information system',
                qualification : "Bachelor of information technology",
                years: '2020 - 2023'
            },
            {
                University : 'Self-Learning / Online Courses  Completed Jonas Schmedtmann’s course ',
                qualification : "(React / Full-Stack Development) – 84 hours of in-depth learning.",
                years: '2024 - 2025'
            },
            // {
            //     University : 'faculty of comptuer science and information system',
            //     qualification : "Bachelor of information technology",
            //     years: '2020 - 2023'
            // }
        ]
    },
     {
        title : 'experience',
        data : [
            {
                company : 'General intelligence and reconnaissance',
                role : "Full-Stack Developer (MERN Stack) ",
                years: '2023 - 2024'
            },
            {
                company : 'Yarn shop ',
                role : "Technical Support",
                years: '2024 - 2025'
            },
            // {
            //     company : 'faculty of comptuer science and information system',
            //     qualification : "Bachelor of information technology",
            //     years: '2020 - 2023'
            // }
        ]
    }
]

const skillData = [
  {
    title: "Frontend",
    data: [
      { name: "React", icon: <FaReact className="text-blue-500 w-5 h-5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "JSX", icon: <FaReact className="text-blue-400 w-5 h-5" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600 w-5 h-5" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600 w-5 h-5" /> },
      { name: "Context API", icon: <FaReact className="text-blue-400 w-5 h-5" /> },
      { name: "React Query", icon: <FaReact className="text-blue-500 w-5 h-5" /> },
      { name: "useReducer", icon: <FaReact className="text-blue-400 w-5 h-5" /> },
      { name: "Custom Hooks", icon: <FaReact className="text-blue-500 w-5 h-5" /> },
      { name: "useEffect", icon: <FaReact className="text-blue-400 w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-5 h-5" /> },
      { name: "Styled Comp", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "CSS Modules", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 w-5 h-5" /> },
    ],
  },

  {
    title: "Backend",
    data: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-5 h-5" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-5 h-5" /> },
      { name: "Mongoose", icon: <SiMongodb className="text-green-700 w-5 h-5" /> },
      { name: "EJS", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "REST API", icon: <FaNodeJs className="text-green-600 w-5 h-5" /> },
      { name: "Supabase", icon: <SiVercel className="w-5 h-5" /> },
      { name: "Custom Auth", icon: <FaNodeJs className="text-green-600 w-5 h-5" /> },
    ],
  },

  {
    title: "Version Control & Deployment",
    data: [
      { name: "Git", icon: <FaGit className="text-red-600 w-5 h-5" /> },
      { name: "GitHub", icon: <FaGit className="text-gray-800 w-5 h-5" /> },
      { name: "Vercel", icon: <SiVercel className="w-5 h-5" /> },
      { name: "Netlify", icon: <SiNetlify className="w-5 h-5 text-blue-400" /> },
    ],
  },

  {
    title: "Networking",
    data: [
      { name: "CCNA", icon: <FaNetworkWired className="w-5 h-5" /> },
      { name: "MCSA Core", icon: <FaNetworkWired className="w-5 h-5" /> },
    ],
  },

  {
    title: "Office Tools",
    data: [
      { name: " Word", icon: <FaMicrosoft className="text-blue-700 w-5 h-5" /> },
      { name: " Excel", icon: <FaMicrosoft className="text-green-600 w-5 h-5" /> },
      { name: " PowerPoint", icon: <FaMicrosoft className="text-red-600 w-5 h-5" /> },
    ],
  },
];


function About() {
    const getData = (arr, title) =>{
        return arr.find((item) => item.title === title);
    }
  return (
    <section className='mt-10 pb-24'>
    <div className="container mx-auto">
           
              <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
        <div className='flex flex-col xl:flex-row'>
               {/* image */}
             <div className='hidden xl:flex flex-1 relative'>
                <div>
                    <DevImg containerStyle="bg-[url('/about/shape-light.svg')] dark:bg-[url('/about/shape-dark.svg')] w-[510px] h-[510px] bg-no-repeat relative "   imgSrc='/about/ahmed.png' imgStyle='ml-8 pt-10 '/> 
                </div>
                
                </div> 
                {/* tabs */}
             <div className='flex-1'>
                <Tabs defaultValue='presonal'>
                    <TabsList className=" w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                        <TabsTrigger className="w-[162px] xl:w-auto" value='presonal'>Presonal Info</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value='qualificaions'>Qualificaions</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>Skills</TabsTrigger>
                    </TabsList>
                {/* tabs content */}
                <div className='text-lg mt-12 xl:mt-8'> 
                {/* personal */}
             <TabsContent value='presonal'>
                <div className='text-center xl:text-left '>
                    <h3 className='h3 mb-4'>Front-End Developer | React | Next.js </h3>
                    <div className='subtitle max-w-xl mx-auto xl:mx-0'> 

High-Performance Web Applications Passionate Front-End Developer with strong expertise in React and Next.js, experienced in building interactive, high-quality web applications. Completed a comprehensive 80+ hour training course covering:

<p> <span className='text-primary'>--</span> Advanced state management for complex applications</p>

<p> <span className='text-primary'>--</span> Component architecture for reusable and maintainable UI</p>

<p> <span className='text-primary'>--</span> Performance optimization to ensure fast and responsive apps</p>

<p> <span className='text-primary'>--</span> Full-stack application development using Supabase</p>

Driven to create seamless and innovative user experiences, always applying best practices and the latest web technologies.
                    </div>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item,index) => {
                        return ( <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>)
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                        <div className='text-primary'>Language Skill</div>
                        <div className="border-b border-border"></div>
                        <div>Arabic , English </div>
                    </div>

                </div>
                </TabsContent>
                 {/* Qualificaions */}
            <TabsContent value='qualificaions'>
                <div >
                    <h3 className='h3 mb-8 text-center xl:text-left'> My Awesome Journey</h3>
                    {/* expreience & education  */}
                    <div className='grid md:grid-cols-2 gap-y-8 ml-5 sm:ml-0'>
                        {/* expreience */}
                        <div className='flex flex-col gap-y-6'>
                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                <Briefcase />
                                <h4 className='capitalize font-medium'>
                                    {getData(qualificationData,'experience').title}
                                </h4>
                            </div>
                            {/* list */}
                            <div className='flex flex-col gap-y-8'>
                                {getData(qualificationData,"experience").data.map((item,index)=>{
                                    const {company , role , years} = item;
                                    return(
                                        <div className='flex gap-x-8 group' key={index}> 
                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                        </div>
                                        <div>
                                            <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                            <div className='text-base font-medium'>{years}</div>
                                        </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* education */}
                         <div className='flex flex-col gap-y-6'>
                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                <GraduationCap size={28} />
                                <h4 className='capitalize font-medium'>
                                    {getData(qualificationData,'education').title}
                                </h4>
                            </div>
                            {/* list */}
                            <div className='flex flex-col gap-y-8'>
                                {getData(qualificationData,"education").data.map((item,index)=>{
                                    const {University , qualification , years} = item;
                                    return(
                                        <div className='flex gap-x-8 group' key={index}> 
                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                        </div>
                                        <div>
                                            <div className='font-semibold text-xl leading-none mb-2'>{University}</div>
                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                            <div className='text-base font-medium'>{years}</div>
                                        </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
                 {/* skills */}
          <TabsContent value="skills">
  <div className="text-center xl:text-left">
    <h3 className="h3 mb-8">Tools I Use Everyday</h3>

    <div>
      <h4 className="text-xl font-semibold mb-2">Skills</h4>
      <div className="border-b border-border mb-4"></div>

      {/* Skill sections */}
      {skillData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className=" font-bold text-xl mb-3 text-primary">{section.title}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 xl:grid-cols-5 justify-start">
            {section.data.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center justify-start font-medium max-w-auto px-1 py-1 border rounded-md text-center xl:text-left"
              >
                {item.icon}
      <span className="ml-1">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</TabsContent>

                </div>
                </Tabs>
             </div>
        </div>
    </div>
    </section>
  )
}

export default About