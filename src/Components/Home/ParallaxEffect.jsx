const ParallaxEffect = () => {
	return (
		<div className="bg-big-02 h-[400px] bg-center bg-cover bg-fixed bg-no-repeat bg-black bg-opacity-55 bg-blend-overlay">
			<div className="text-white w-full h-[100%] flex flex-col items-center justify-center">
				<p className="text-2xl font-Noto-Sans-JP md:text-4xl font-light">
					BEST EVER DESIGN
				</p>
				<p className="text-2xl md:text-5xl font-bold font-Noto-Sans-JP tracking-wider text-center m-2">
					Time to enhance your web presence!
				</p>
				<button className="w-36 md:w-52 bg-indigo-600 p-2 font-Noto-Sans-JP tracking-wider rounded-md my-8 hover:bg-opacity-90">
					CONTACT US
				</button>
			</div>
		</div>
	);
};

export default ParallaxEffect;
