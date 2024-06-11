import ServiceHero from "../Components/Service/ServiceHero";
import Services from "../Components/Service/Services";
import ComboOffers from "../Components/Service/ComboOffers";
import ServiceOverview from "../Components/Service/ServiceOverview";

const ServicePage = () => {
	return (
		<>
			<ServiceHero />
			<Services />
			<ComboOffers />
			<ServiceOverview />
		</>
	);
};

export default ServicePage;
