const Difference = () => {
	const sections = [
		{
			title: "Shooting Stars",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
		{
			title: "The Catalyzer",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
		{
			title: "Neptune",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
		{
			title: "Melanchole",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
	];
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 m-20 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
						ROOF PARTY POLAROID
					</h2>
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						Master Cleanse Reliac Heirloom
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
						gentrify, subway tile poke farm-to-table. Franzen you probably
						havent heard of them man bun deep jianbing selfies heirloom prism
						food truck ugh squid celiac humblebrag.
					</p>
				</div>
				<div className="flex flex-wrap">
					{sections.map((section) => (
						<div
							key={section.title}
							className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 group hover:border-indigo-600 transition-colors duration-300"
						>
							<h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 group-hover:text-indigo-600 transition-all duration-300">
								{section.title}
							</h2>
							<p className="leading-relaxed text-base mb-4">
								{section.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Difference;
