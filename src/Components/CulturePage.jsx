const CulturePage = () => {
	return (
		<div
			className="relative w-full"
			style={{ paddingBottom: "calc(100% * 0.5625)" }}
		>
			<img
				src="big01.jpg"
				className="absolute inset-0 object-cover w-full h-full z-0"
				alt="culture page"
			/>
			<div className="absolute inset-0 flex flex-col items-center text-center z-10">
				<div>
					<p className="text-3xl font-Noto-Sans-JP uppercase font-light text-gray-600 tracking-wider pt-24">
						Work Place
					</p>
					<p className="text-5xl font-Noto-Sans-JP font-semibold text-gray-600 tracking-widest mt-4">
						THE CULTURE
					</p>
					<p className="italic text-gray-600 font-Noto-Sans-JP text-lg mt-6">
						Lovely people with knack for design creativity flourish here.
					</p>
				</div>
				<div className="mt-20 w-full flex justify-center">
					<p className="font-Noto-Sans-JP text-lg text-gray-600 text-center w-1/2 tracking-wider">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
						beatae odit molestiae. Qui distinctio, corporis commodi ipsum omnis
						sapiente nisi, voluptatibus placeat, rem voluptatem ex ratione esse
						nobis deserunt sunt.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CulturePage;
