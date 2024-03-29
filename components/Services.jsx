import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const servicesData = [
	{
		icon: <GanttChartSquare size={50} strokeWidth={0.8} />,
		title: "Web Design",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
	},
	{
		icon: <Blocks size={50} strokeWidth={0.8} />,
		title: "Web Development",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, laboriosam!"
	},
	{
		icon: <Gem size={50} strokeWidth={0.8} />,
		title: "Mobile App Development",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati!"
	}
]

const Services = () => {
	return (
		<section className="mb-12 xl:mb-36">
			<div className="container mx-auto">
				<h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
				<div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
					{servicesData.map((item, index) => {
						return (
							<Card key={index} className="w-full max-w-[424px] h-[300px] flex flex-col mt-5 pt-16 pb-10 justify-center items-center relative">
								<CardHeader className="text-primary absolute -top-[60px]">
									<div className="w-[140px] h-[80px] bg-pink-100 dark:border flex justify-center items-center rounded-xl">{item.icon}</div>
								</CardHeader>
								<CardContent className="text-center">
									<CardTitle className="mb-4">{item.title}</CardTitle>
									<CardDescription className="text-lg">{item.description}</CardDescription>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Services