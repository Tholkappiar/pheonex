const Difference = () => {
	const sections = [
		{
			title: "Tailored Solutions",
			description:
				"We specialize in creating digital solutions tailored to meet your unique business needs. From custom web development to strategic digital marketing, we ensure your goals are achieved.",
		},
		{
			title: "Innovative Approach",
			description:
				"Our innovative approach keeps us ahead in the digital landscape. Using cutting-edge technologies and creative strategies, we deliver impactful results for your business.",
		},
		{
			title: "Client-Centric Focus",
			description:
				"With a strong client-centric focus, we prioritize understanding your objectives to exceed expectations. Our solutions are designed to align perfectly with your business goals.",
		},
		{
			title: "Exceptional Quality",
			description:
				"Committed to delivering exceptional quality, our team ensures precision and attention to detail in every project, from design to deployment.",
		},
	];

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 m-20 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
						Digital Innovations
					</h2>
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						Difference from Others
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Discover what makes us different. We bring a unique blend of
						expertise, creativity, and dedication to every project, ensuring
						your success in the digital age.
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
