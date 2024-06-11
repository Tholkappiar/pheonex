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
		<div className="text-gray-600">
			<p className="sm:text-4xl text-3xl font-bold title-font mb-2 font-Noto-Sans-JP text-center text-gray-900">
				Services we DO
			</p>
			<div className="flex flex-col gap-20 justify-center items-center flex-wrap sm:flex-row my-14 text-center tracking-wider p-4">
				{services.map((service) => (
					<div
						key={service.title}
						className="size-64 md:size-72 rounded-lg shadow-md flex flex-col items-center justify-center group hover:shadow-xl duration-300"
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
