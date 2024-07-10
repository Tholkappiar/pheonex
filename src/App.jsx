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
          <Route path="/Web-Application" element={<WebApplications />} />
          <Route path="/Web-Interactive" element={<WebAndInteractive />} />
          <Route path="/Web-Promotions" element={<WebPromotions />} />
          <Route
            path="/Software-Development"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="/Technical-Documentation"
            element={<TechnicalDocumentation />}
          />
          <Route path="/Content-Management" element={<ContentManagement />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
