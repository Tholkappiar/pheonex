import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import { useEffect } from "react";
import ErrorPage from "./Components/misc/ErrorPage";
import ContactMap from "./Components/misc/ContactMap";

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
		<BrowserRouter>
			<Navbar />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/service" element={<ServicePage />}></Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</ScrollToTop>
			<Footer />
			<ContactMap />
		</BrowserRouter>
	);
}

export default App;
