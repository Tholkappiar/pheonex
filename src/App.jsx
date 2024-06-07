import Navbar from "./Components/Home/Navbar";
import ServiceHero from "./Components/Service/ServiceHero";
import ServiceOverview from "./Components/Service/ServiceOverview";
import Services from "./Components/Service/Services";
import HomePage from "./Pages/HomePage";

function App() {
	return (
		<div>
			{/* <HomePage /> */}
			<Navbar />
			<ServiceHero />
			<Services />
			<ServiceOverview />
		</div>
	);
}

export default App;
