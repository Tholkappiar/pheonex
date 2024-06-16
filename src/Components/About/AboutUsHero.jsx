import { Link } from "react-router-dom";
import service01 from "../../assets/images/Service01.jpg";
const AboutUsHero = () => {
	return (
		<section className="text-gray-600 body-font mt-10">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Innovating the future
						<br className="hidden lg:inline-block" />
						of digital solutions
					</h1>
					<p className="mb-8 leading-relaxed">
						Elevate your business with cutting-edge digital strategies and
						solutions. From custom web development to strategic digital
						marketing, we're dedicated to transforming your online presence.
					</p>
					<Link
						to="/service"
						className="flex justify-center hover:opacity-80 text-indigo-600 hover:bg-indigo-600 hover:text-white font-Noto-Sans-JP font-semibold p-2 rounded-md transition-colors duration-300"
					>
						<p className="inline-flex items-center md:mb-2 lg:mb-0">
							Learn More
							<svg
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</p>
					</Link>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded-md"
						alt="hero"
						src={service01}
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutUsHero;
