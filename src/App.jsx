import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import ComboOffers from "./Components/Service/ComboOffers";
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
			<ComboOffers />
			<ServiceOverview />
			<Footer />
		</div>
	);
}

export default App;
