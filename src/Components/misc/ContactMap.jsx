export default function ContactMap() {
	return (
		<section className="text-gray-600 body-font relative">
			<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 sm:p-5 md:p-10 flex flex-col gap-4 md:flex-row items-end justify-start relative">
					<iframe
						width="100%"
						height="100%"
						className="md:absolute inset-0"
						frameBorder="0"
						title="map"
						marginHeight="0"
						marginWidth="0"
						scrolling="no"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5136207027385!2d80.27235512550152!3d13.002930784623183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e34657ca11%3A0xcafd01bdfa5e4e26!2s16%2C%2012%2C%202nd%20St%20Rd%2C%20Urrur%20Kuppam%2C%20Besant%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600090!5e0!3m2!1sen!2sin!4v1718166976927!5m2!1sen!2sin"
						// style={{ filter: "opacity(0.4)" }}
					/>
					<div className="bg-white md:relative flex flex-wrap py-6 rounded shadow-md">
						<div className="lg:w-1/2 px-6">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
								ADDRESS
							</h2>
							<p className="mt-1">
								Photo booth tattooed prism, portland taiyaki hoodie neutra
								typewriter
							</p>
						</div>
						<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
								EMAIL
							</h2>
							<a className="text-indigo-500 leading-relaxed">
								example@email.com
							</a>
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
								PHONE
							</h2>
							<p className="leading-relaxed">123-456-7890</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
					<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
						Feedback
					</h2>
					<p className="leading-relaxed mb-5 text-gray-600">
						Post-ironic portland shabby chic echo park, banjo fashion axe
					</p>
					<div className="relative mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-600">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-600"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Button
					</button>
					<p className="text-xs text-gray-500 mt-3">
						Chicharrones blog helvetica normcore iceland tousled brook viral
						artisan.
					</p>
				</div>
			</div>
		</section>
	);
}
