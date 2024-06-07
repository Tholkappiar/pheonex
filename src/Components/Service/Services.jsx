import websiteDev from "../../assets/website.svg";
import graphicDesign from "../../assets/graphicDesign.svg";
import appDev from "../../assets/appDev.svg";
import digitalMarketing from "../../assets/digitalMarketing.svg";

const Services = () => {
	return (
		<div className="h-[400px] sm:h-[500px] 2xl:h-[600px] text-gray-600 mt-20">
			<p className="text-3xl sm:text-5xl font-Noto-Sans-JP font-bold text-center">
				Services we DO
			</p>
			<div className="flex gap-20 justify-center my-20 text-center tracking-wider">
				<div className="size-72  rounded-lg shadow-md flex flex-col items-center justify-center">
					<img src={websiteDev} alt="" className="size-10" />
					<p className="my-2 font-semibold uppercase">Web development</p>
					<p className="my-4 text-sm p-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						officia, dicta suscipit culpa nesciunt tenetur?
					</p>
				</div>
				<div className="size-72  rounded-lg shadow-md flex flex-col items-center justify-center">
					<img src={appDev} alt="" className="size-10" />
					<p className="my-2 font-semibold uppercase">App development</p>
					<p className="my-4 text-sm p-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						officia, dicta suscipit culpa nesciunt tenetur?
					</p>
				</div>
				<div className="size-72  rounded-lg shadow-md flex flex-col items-center justify-center">
					<img src={graphicDesign} alt="" className="size-10" />
					<p className="my-2 font-semibold uppercase">Graphic Design</p>
					<p className="my-4 text-sm p-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						officia, dicta suscipit culpa nesciunt tenetur?
					</p>
				</div>
				<div className="size-72  rounded-lg shadow-md flex flex-col items-center justify-center">
					<img src={digitalMarketing} alt="" className="size-10" />
					<p className="my-2 font-semibold uppercase">Digital Marketing</p>
					<p className="my-4 text-sm p-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						officia, dicta suscipit culpa nesciunt tenetur?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
