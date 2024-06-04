import CulturePage from "./Components/CulturePage";
import Footer from "./Components/Footer";
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
			<Footer />
		</div>
	);
}

export default App;
