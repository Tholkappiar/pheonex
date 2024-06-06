import CulturePage from "../Components/Home/CulturePage";
import Footer from "../Components/Home/Footer";
import Hero from "../Components/Home/Hero";
import Navbar from "../Components/Home/Navbar";
import ParallaxEffect from "../Components/Home/ParallaxEffect";
import StoryPage from "../Components/Home/StoryPage";
import WhatWeDo from "../Components/Home/WhatWeDo";

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<WhatWeDo />
			<ParallaxEffect />
			<CulturePage />
			<StoryPage />
			<Footer />
		</div>
	);
};

export default HomePage;
