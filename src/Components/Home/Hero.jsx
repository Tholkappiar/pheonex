const Hero = () => {
    return (
        <div className="min-h-screen flex items-center relative overflow-hidden select-none">
            <div className="bg-hero-bg bg-center bg-no-repeat bg-cover bg-blend-overlay bg-black bg-opacity-55 h-full w-full absolute z-0 animate-scale-slow"></div>
            <div className="container mx-auto text-white p-10 sm:p-20 xl:p-48 mt-32 flex flex-col justify-center z-10">
                <p className="text-2xl sm:text-3xl uppercase font-Noto-Sans-JP tracking-widest font-medium">
                    Graphics. Web. Digital.
                </p>
                <p className="text-5xl md:text-7xl xl:text-[150px] uppercase font-Noto-Sans-JP tracking-widest font-[1000] mt-8 mb-4">
                    START-UP
                </p>
                <p className="w-full sm:w-[50%] font-Noto-Sans-JP tracking-wider leading-relaxed lg:tracking-widest lg:leading-loose">
                    At Pheonex Solutions, we are dedicated to providing
                    cutting-edge technology solutions that help businesses
                    thrive in the digital age. Our team of experts is ready to
                    turn your vision into reality.
                </p>
                <button className="p-2 my-10 font-mono font-medium sm:text-lg lg:text-xl bg-indigo-600 rounded-md shadow-lg w-36 sm:w-52 tracking-wider hover:opacity-90">
                    EXPLORE US
                </button>
            </div>
        </div>
    );
};

export default Hero;
