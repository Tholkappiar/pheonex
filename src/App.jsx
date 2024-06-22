import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import { useEffect } from "react";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./Pages/ErrorPage";
import WebDesign from "./Components/SubServices/WebDesign";
import Service2 from "./Components/SubServices/Service2";
import Service3 from "./Components/SubServices/Service3";
import Service4 from "./Components/SubServices/Section4";
import Service5 from "./Components/SubServices/Service5";
import Service6 from "./Components/SubServices/Service6";

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
			<WebDesign />
			<Service2 />
			<Service5 />
			<Service6 />
			{/* <Service3 />
			<Service4 /> */}
			<ContactUs />
		</BrowserRouter>
	);
}

export default App;
