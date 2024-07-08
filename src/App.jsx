import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import { useEffect } from "react";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./Pages/ErrorPage";
import WebApplications from "./Components/SubServices/WebApplications";
import WebAndInteractive from "./Components/SubServices/WebAndInteractive";
import WebPromotions from "./Components/SubServices/WebPromotions";
import SoftwareDevelopment from "./Components/SubServices/SoftwareDevelopment";
import TechnicalDocumentation from "./Components/SubServices/TechnicalDocumentation";
import ContentManagement from "./Components/SubServices/ContentManagement";

function App() {
	const ScrollToTop = (props) => {
		const location = useLocation();
		useEffect(() => {
			window.scrollTo(0, 0);
		}, [location]);
		// eslint-disable-next-line react/prop-types
		return <>{props.children}</>;
	};

	return (
		// <BrowserRouter>
		// 	<Navbar />
		// 	<ScrollToTop>
		// 		<Routes>
		// 			<Route path="/" element={<HomePage />}></Route>
		// 			<Route path="/service" element={<ServicePage />}></Route>
		// 			<Route path="/contact" element={<ContactUs />}></Route>
		// 			<Route path="/about" element={<AboutUs />}></Route>
		// 			<Route path="*" element={<ErrorPage />} />
		// 		</Routes>
		// 	</ScrollToTop>
		// 	<Footer />
		// </BrowserRouter>
		<BrowserRouter>
			<Navbar />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/service" element={<ServicePage />}></Route>
					<Route path="/contact" element={<ContactUs />}></Route>
					<Route path="/about" element={<AboutUs />}></Route>
					<Route path="*" element={<ErrorPage />} />
					<Route path="/webApplication" element={<WebApplications/>} /> 
					<Route path="/wi" element={<WebAndInteractive/>}/>
					<Route path="/wp" element={<WebPromotions/>}/>
					<Route path="/sd" element={<SoftwareDevelopment/>}/>
					<Route path="/td" element={<TechnicalDocumentation/>}/>
					<Route path="/cm" element={<ContentManagement/>}/>
					
				</Routes>
			</ScrollToTop>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
