const ComboOffers = () => {
	const combos = [
		{
			type: "start",
			price: "free",
			comboServices: ["Web dev", "App dev"],
			button: "button",
			content: "Literally you probably haven't heard of them jean shorts.",
		},
		{
			type: "pro",
			price: "38",
			comboServices: ["Web dev", "App dev", "Design"],
			button: "button",
			content: "Literally you probably haven't heard of them jean shorts.",
		},
		{
			type: "business",
			price: "56",
			comboServices: ["Web dev", "App dev", "Design", "Digital Marketing"],
			button: "button",
			content: "Literally you probably haven't heard of them jean shorts.",
		},
		{
			type: "special",
			price: "72",
			comboServices: [
				"Web dev",
				"App dev",
				"Design",
				"Digital Marketing",
				"Mixtape chillwave tumeric",
			],
			button: "button",
			content: "Literally you probably haven't heard of them jean shorts.",
		},
	];
	return (
		<div>
			<section className="text-gray-600 overflow-hidden">
				<div className="container px-5 py-10 sm:py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
							Pricing
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
						</p>
					</div>
					<div className="flex flex-wrap -m-4">
						{combos.map((combo) => (
							<div key={combo.type} className="p-4 xl:w-1/4 md:w-1/2 w-full">
								<div
									className={`h-full p-6 rounded-lg border-2 ${
										combo.type == "pro"
											? "border-indigo-600"
											: "border-gray-300"
									} flex flex-col relative overflow-hidden`}
								>
									{combo.type == "pro" && (
										<span className="bg-indigo-600 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
											POPULAR
										</span>
									)}
									<h2 className="uppercase text-sm tracking-widest title-font mb-1 font-medium">
										{combo.type}
									</h2>
									<h1 className="capitalize text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
										{combo.price == "free" ? combo.price : `$${combo.price}`}
									</h1>
									{combo.comboServices.map((service, index) => (
										<p
											key={`${service}-${index}`}
											className="flex items-center text-gray-600 mb-2"
										>
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											{service}
										</p>
									))}
									<button
										className={`capitalize flex items-center mt-auto text-white ${
											combo.type == "pro" ? "bg-indigo-600" : "bg-gray-400"
										} border-0 py-2 px-4 w-full hover:bg-opacity-90 focus:outline-none rounded`}
									>
										{combo.button}
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-auto"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</button>
									<p className="text-xs text-gray-500 mt-3">{combo.content}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ComboOffers;
