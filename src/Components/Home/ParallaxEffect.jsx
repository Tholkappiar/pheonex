import { Link } from 'react-router-dom';
const ParallaxEffect = () => {
	return (
		<div className="bg-big-02 h-[400px] bg-center bg-cover bg-fixed bg-no-repeat bg-black bg-opacity-55 bg-blend-overlay">
			<div className="text-white w-full h-[100%] flex flex-col items-center justify-center">
				<p className="text-2xl font-Noto-Sans-JP md:text-4xl font-light">
					BEST EVER DESIGN
				</p>
				<p className="text-2xl md:text-5xl font-bold font-Noto-Sans-JP tracking-wider text-center m-2">
					Time to enhance your <span className="text-indigo-600">Digital</span>{" "}
					presence!
				</p>
				<Link to="/contact">
          <button className="w-36 md:w-52 bg-indigo-600 p-2 font-Noto-Sans-JP tracking-wider rounded-md my-8 hover:bg-opacity-90">
            CONTACT US
          </button>
        </Link>
			</div>
		</div>
	);
};

export default ParallaxEffect;
