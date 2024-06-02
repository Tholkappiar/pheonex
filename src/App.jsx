import Dummy from "./Components/Dummy";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ParallaxEffect from "./Components/ParallaxEffect";
import WhatWeDo from "./Components/WhatWeDo";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<WhatWeDo />
			<ParallaxEffect />
			<Dummy />
		</div>
	);
}

export default App;
