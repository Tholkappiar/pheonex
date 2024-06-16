import { Link } from "react-router-dom";

const GalleryHero = () => {
	return (
		<div>
			<div className="relative px-6 pt-14 lg:px-8">
				<div
					className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50% - 11rem)] aspect-w-1155 aspect-h-678 w-[36.125rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					></div>
				</div>
				<div className="mx-auto max-w-2xl py-14 sm:py-28">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Discover how we innovate solutions.{" "}
							<Link to="/about" className="font-semibold text-indigo-600">
								<span className="absolute inset-0" aria-hidden="true"></span>
								About us <span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Data to enrich your online business
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Empower your business with actionable insights and strategic data
							utilization. Enhance user experiences, drive growth, and optimize
							performance with our comprehensive data solutions.
						</p>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100% - 13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100% - 30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50% + 3rem)] aspect-w-1155 aspect-h-678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% + 36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default GalleryHero;
