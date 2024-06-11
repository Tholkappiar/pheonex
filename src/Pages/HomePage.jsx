import CulturePage from "../Components/Home/CulturePage";
import Hero from "../Components/Home/Hero";
import ParallaxEffect from "../Components/Home/ParallaxEffect";
import StoryPage from "../Components/Home/StoryPage";
import WhatWeDo from "../Components/Home/WhatWeDo";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<WhatWeDo />
			<ParallaxEffect />
			<CulturePage />
			<StoryPage />
		</div>
	);
};

export default HomePage;
