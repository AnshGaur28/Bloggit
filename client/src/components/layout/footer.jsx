import {MetaLogo , TwitterLogo  , InstagramLogo } from '@phosphor-icons/react'
function Footer(){
    return <div className="bg-zinc-900 flex flex-col justify-between justify-center   pb-10 ">
        <div className="bg-gray-500 flex flex-col h-1  m-4"></div>
        <div className="flex flex-row  h-[240px]  overflow-hidden">

                <span className="w-1/4 flex flex-col gap-5 text-center  "><h2 className="text-violet-700 text-3xl  text-start px-2 mx-10 mb-0 pb-0 font-bold">Bloggit</h2> 
                <div className="text-xl lead font-medium text-gray-500 text-start px-2 mx-10">Educate yourself through other's <span><b>Experience</b></span> </div>
                <div className="flex flex-row gap-4 px-2 mx-10 ">
                    <MetaLogo size={20}/>
                    <TwitterLogo size={20}/>
                    <InstagramLogo size={20}/>
                </div>
                </span>

                <span className="w-1/4 flex flex-col gap-5 text-center  "><h2 className="text-violet-500 text-2xl  text-center px-2 mx-10 mb-0 pb-0 font-bold">Components</h2> 
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    About
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    Blogs
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    Profile
                </div>
                </span>


                <span className="w-1/4 flex flex-col gap-5 text-center  items-center  "><h2 className="text-violet-500 text-2xl  text-center px-2 mx-10 mb-0 pb-0 font-bold ">Resources</h2> 
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    React
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    Tailwind
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    Node
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    Atlas
                </div>
                </span>

                <span className="w-1/4 flex flex-col gap-5 text-center  items-center  "><h2 className="text-violet-500 text-2xl  text-center px-2 mx-10 mb-0 pb-0 font-bold ">References</h2> 
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    MDN
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    Material-CSS
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    UI/UX ~ React Components
                </div>
                <div className="flex flex-col gap-4 px-2 mx-10 text-gray-400">
                    ChatGPT
                </div>
                </span>

        </div>
        
    </div>
}
export default Footer