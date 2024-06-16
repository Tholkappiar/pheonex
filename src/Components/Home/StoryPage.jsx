import { Link } from "react-router-dom";

const StoryPage = () => {
	const links = [
		{
			title: "Web & Interactive Design",
		},
		{
			title: "Web Applications",
		},
		{
			title: "Software Development",
		},
		{
			title: "Technical Documentation",
		},
		{
			title: "Web Promotions",
		},
		{
			title: "Content Management",
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
				View our diverse range of services and projects.
			</p>
			<div className="flex flex-col sm:flex-row gap-8 mt-10 sm:mt-20 gray tracking-wide sm:tracking-wider leading-6 sm:leading-8 w-11/12 text-gray-500 text-sm md:text-base lg:text-lg">
				<div className="sm:w-1/2">
					<div>
						<p>
							Pheonex Solutions started with a vision to bridge the gap between
							businesses and technology. We strive to deliver exceptional
							digital solutions tailored to the unique needs of our clients.
						</p>
						<p className="mt-8">
							Our journey is driven by innovation, dedication, and a passion for
							excellence. From web development to digital marketing, we offer a
							wide range of services designed to help businesses succeed in the
							digital age.
						</p>
					</div>
					<button className="bg-indigo-600 p-2 w-32 sm:w-40 rounded-lg text-white font-semibold mt-6 shadow-md hover:opacity-90">
						View Services
					</button>
				</div>
				<div className="sm:w-1/2">
					<p>
						Discover the array of services we provide, each designed to cater to
						the evolving needs of our clients.
					</p>
					<div className="text-indigo-600 text-sm uppercase mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{links.map((link) => (
							<Link to="/service" key={link.title} className="group">
								<p className="cursor-pointer group-hover:text-indigo-700">
									{link.title}
								</p>
								<div className="bg-indigo-500 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoryPage;
