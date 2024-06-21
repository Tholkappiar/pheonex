import gifts from "../../assets/gifts.svg";

const Service5 = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					{/* <img
						className="object-cover object-center rounded"
						alt="hero"
						src="https://dummyimage.com/600x620"
					/> */}
					<div className="h-[520px] w-[500px] text-white bg-gray-300 bg-serviceBanner1 bg-center bg-no-repeat bg-cover rounded-lg flex flex-col gap-8 items-center justify-center">
						<div className="flex gap-6 border-b-2 border-gray-300">
							<div className="size-24 rounded-full border-2 border-violet-700 bg-violet-600 flex justify-center items-center">
								<img src={gifts} alt="gifts" className="size-14" />
							</div>
							<div className="mb-8">
								<p className="text-6xl font-Noto-Sans-JP font-bold">500 +</p>
								<p className="font-Noto-Sans-JP font-bold w-4/5 mt-4">
									Business advices given over 30 years
								</p>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="size-24 rounded-full border-2 border-violet-700 bg-violet-600 flex justify-center items-center">
								<img src={gifts} alt="gifts" className="size-14" />
							</div>
							<div>
								<p className="text-6xl font-Noto-Sans-JP font-bold">30 +</p>
								<p className="font-Noto-Sans-JP font-bold w-4/5 mt-4">
									Business advices given over 30 years
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<p className="text-indigo-600 font-Noto-Sans-JP font-bold text-xl my-4">
						WHY CHOOSE US
					</p>
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-Noto-Sans-JP font-bold text-gray-900">
						Get benefits and
						<br className="hidden lg:inline-block" />
						advantages market goal
					</h1>
					<p className="mt-3 leading-relaxed w-3/4 tracking-wide">
						Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
						plant cold-pressed tacos poke beard tote bag. Heirloom echo park
						mlkshk tote bag selvage hot chicken authentic tumeric truffaut
						hexagon try-hard chambray.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Service5;
