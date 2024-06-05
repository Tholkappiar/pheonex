const StoryPage = () => {
	const links = [
		{
			title: "WEB & INTERACTIVE DESIGN",
			path: "#",
		},
		{
			title: "WEB APPLICATIONS",
			path: "#",
		},
		{
			title: "SOFTWARE DEVELOPMENT",
			path: "#",
		},
		{
			title: "TECHNICAL DOCUMENTATION",
			path: "#",
		},
		{
			title: "WEB PROMOTIONS",
			path: "#",
		},
		{
			title: "CONTENT MANAGEMENT",
			path: "#",
		},
	];
	return (
		<div className="container mx-auto text-gray-600 p-6 mb-20">
			<p className="text-lg md:text-2xl lg:text-3xl font-Noto-Sans-JP uppercase font-light mt-10 md:mt-20 tracking-wider">
				The Life Size
			</p>
			<p className="text-2xl md:text-4xl lg:text-5xl font-Noto-Sans-JP font-bold tracking-widest uppercase mt-2">
				Brand Story
			</p>
			<p className="font-Noto-Sans-JP tracking-widest italic text-sm lg:text-lg mt-4 sm:mt-6">
				View multiple content block layouts under features section.
			</p>
			<div className="flex flex-col sm:flex-row gap-8 mt-10 sm:mt-20 gray tracking-wide sm:tracking-wider leading-6 sm:leading-8 w-11/12 text-gray-500 text-sm md:text-base lg:text-lg">
				<div className="sm:w-1/2">
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magnaal qua. Ut enim
							ad minim veniam, quis nostrud exercitation ulla mco laboris nisi
							ut aliquip ex ea commodo consequat.
						</p>
						<p className="mt-8">
							Excepteur sint occaecat cupidatat non proident, sunt in culp a qui
							officia deserunt mollit anim id est laborum. Sed ut per spiciatis
							unde omnis iste natus error sit voluptatem accusan tium doloremque
							laudantium, totam rem aperiam, eaque ip
						</p>
					</div>
					<button className="bg-indigo-600 p-2 w-32 sm:w-40 rounded-lg text-white font-semibold mt-6 shadow-md hover:opacity-90">
						View Projects
					</button>
				</div>
				<div className="sm:w-1/2">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="text-indigo-600 text-sm uppercase mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{links.map((link) => (
							<div key={link.title} className="group">
								<p className="cursor-pointer group-hover:text-indigo-700">
									{link.title}
								</p>
								<div className="bg-indigo-500 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoryPage;
