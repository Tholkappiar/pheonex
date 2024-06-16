import { Link } from "react-router-dom";
import service02 from "../../assets/images/Service02.jpg";

const WeStarted = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<img
						className="object-cover object-center rounded-md"
						alt="howWeStarted"
						src={service02}
					/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Innovating from Day One
						<br className="hidden lg:inline-block" />
						to Shape the Future
					</h1>
					<p className="mb-8 leading-relaxed">
						From humble beginnings driven by a passion for technology, we
						embarked on a journey to revolutionize digital solutions. We started
						with a clear vision to innovate and empower businesses with
						cutting-edge technologies and creative strategies.
					</p>
					<div className="flex justify-center hover:opacity-80 text-indigo-600 hover:bg-indigo-600 hover:text-white font-Noto-Sans-JP font-semibold p-2 rounded-md transition-colors duration-300">
						<Link
							to="/service"
							className="inline-flex items-center md:mb-2 lg:mb-0"
						>
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
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeStarted;
