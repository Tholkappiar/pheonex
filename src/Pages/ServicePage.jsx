import ServiceHero from "../Components/Service/ServiceHero";
import Services from "../Components/Service/Services";
import ComboOffers from "../Components/Service/ComboOffers";
import ServiceOverview from "../Components/Service/ServiceOverview";
import GalleryHero from "../Components/Service/GalleryHero";

const ServicePage = () => {
	return (
		<>
			{/* <ServiceHero /> */}
			<GalleryHero />
			{/* <ServiceOverview /> */}
			<Services />
			<ComboOffers />
		</>
	);
};

export default ServicePage;
