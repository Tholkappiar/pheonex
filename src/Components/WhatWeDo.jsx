import pen from "../assets/pen.svg";
import layer from "../assets/layer.svg";
import bricks from "../assets/bricks.svg";
import stack from "../assets/stack.svg";
import cube from "../assets/cube.svg";

const WhatWeDo = () => {
	const cards = [
		{
			title: "Pixel Perfect",
			image: pen,
		},
		{
			title: "VECTOR SHAPES",
			image: layer,
		},
		{
			title: "GOOGLE FONTS",
			image: bricks,
		},
		{
			title: "EASY LAYERS",
			image: stack,
		},
		{
			title: "BOOTSTRAP GRID",
			image: cube,
		},
	];
	return (
		<div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container w-1/2 mx-auto justify-center items-center my-32">
			<div className="flex items-center justify-center">
				<div className="h-[300px] w-[370px] flex flex-col justify-center rounded-lg p-4">
					<div className="space-y-2 text-gray-500">
						<p className="text-4xl font-light font-Noto-Sans-JP">WHAT WE DO</p>
						<p className="font-bold text-5xl font-Noto-Sans-JP tex2t-gray-600">
							EXPERTS
						</p>
						<p className="text-gray-500 pt-4 pl-2">
							We build digital solutions.
						</p>
					</div>
				</div>
			</div>
			{cards.map((card) => (
				<div key={card.title} className="flex items-center justify-center">
					<div className="h-[280px] w-[350px] bg-gray-100 flex flex-col justify-center items-center rounded-lg">
						<img src={card.image} alt="" className="size-16 mt-4" />
						<p className="text-lg uppercase text-gray-600 font-Noto-Sans-JP">
							{card.title}
						</p>
						<p className="text-center text-xs text-gray-600 mt-4 font-Noto-Sans-JP mx-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Mollitia, quae.
						</p>
						<p className="uppercase text-black font-Noto-Sans-JP text-sm mt-10">
							Learn More
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default WhatWeDo;
