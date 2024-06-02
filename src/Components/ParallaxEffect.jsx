const ParallaxEffect = () => {
	return (
		<div className="bg-big-01 h-[400px] bg-center bg-cover bg-fixed bg-no-repeat bg-black bg-opacity-55 bg-blend-overlay">
			<div className="text-white w-full h-[100%] flex flex-col items-center justify-center">
				<p className="font-Noto-Sans-JP text-4xl font-light">
					BEST EVER DESIGN
				</p>
				<p className="text-5xl font-bold font-Noto-Sans-JP tracking-wider">
					Time to enhance your web presence!
				</p>
				<button className="w-56 bg-indigo-600 p-4 font-Noto-Sans-JP tracking-wider rounded-md my-8 hover:bg-opacity-90">
					CONTACT US
				</button>
			</div>
		</div>
	);
};

export default ParallaxEffect;
