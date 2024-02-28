import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from "react-icons/ri"

import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1 mb-4">Hello, my name is John Doe</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey, and what I engage in professionally.</p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-2 rounded-full text-base">Contact me <Send size={15} /></Button>
                            </Link>
                            <Button variant="secondary" className="gap-x-2 rounded-full text-base">Download CV <Download size={18} /></Button>
                        </div>
                        <div>
                            <Socials containerStyles="flex justify-center gap-x-6 mx-auto xl:mx-0" iconStyles="text-foreground text-[22px] hover:text-primary transition-all" />
                        </div>
                    </div>
                    <div className="hidden xl:flex relative">
                        {/* Badge 1 */}
                        <Badge containerStyles="absolute top-[24%] -left-[5rem] !gap-x-3" icon={<RiBriefcase4Fill />} endCountNum={5} badgeText="Years Of Experience" />
                        {/* Badge 2 */}
                        <Badge containerStyles="absolute top-[80%] -left-[1rem] !gap-x-3" icon={<RiTodoFill />} endCountNum={10} endCountText="k" badgeText="Finished Projects" />
                        {/* Badge 3 */}
                        <Badge containerStyles="absolute top-[55%] -right-8 !gap-x-3" icon={<RiTeamFill />} endCountNum={5} endCountText="k" badgeText="Happy Clients" />

                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/developer.png" />
                    </div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero