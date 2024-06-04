import CulturePage from "./Components/CulturePage";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ParallaxEffect from "./Components/ParallaxEffect";
import StoryPage from "./Components/StoryPage";
import WhatWeDo from "./Components/WhatWeDo";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<WhatWeDo />
			<ParallaxEffect />
			<CulturePage />
			<StoryPage />
		</div>
	);
}

export default App;
