import websiteDev from "../../assets/website.svg";
import graphicDesign from "../../assets/graphicDesign.svg";
import appDev from "../../assets/appDev.svg";
import digitalMarketing from "../../assets/digitalMarketing.svg";

const Services = () => {
	const services = [
		{
			title: "Web development",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia, dicta suscipit culpa nesciunt tenetur?",
			image: websiteDev,
		},
		{
			title: "App development",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia, dicta suscipit culpa nesciunt tenetur?",
			image: appDev,
		},
		{
			title: "Graphic Design",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia, dicta suscipit culpa nesciunt tenetur?",
			image: graphicDesign,
		},
		{
			title: "Digital Marketing",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia, dicta suscipit culpa nesciunt tenetur?",
			image: digitalMarketing,
		},
	];

	return (
		<div className="h-[400px] sm:h-[500px] 2xl:h-[600px] text-gray-600 mt-20">
			<p className="text-3xl sm:text-5xl font-Noto-Sans-JP font-bold text-center">
				Services we DO
			</p>
			<div className="flex flex-col gap-20 justify-center items-center flex-wrap sm:flex-row my-20 text-center tracking-wider p-4">
				{services.map((service) => (
					<div
						key={service.title}
						className="size-72  rounded-lg shadow-md flex flex-col items-center justify-center group hover:shadow-xl duration-300"
					>
						<img src={service.image} alt="" className="size-10" />
						<p className="my-2 font-semibold uppercase group-hover:text-indigo-600">
							{service.title}
						</p>
						<p className="my-4 text-sm p-2">{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
