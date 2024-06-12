import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
	{ name: "Home", to: "/", current: false },
	{ name: "Service", to: "/service", current: false },
	{ name: "About", to: "/about", current: false },
	{ name: "Contact", to: "/contact", current: false },
	{ name: "Features", to: "/features", current: false },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const [isBgTransparent, setIsBgTransparent] = useState(true);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 100);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		// Set the routes where the background should be transparent
		const transparentBgRoutes = ["/"];

		setIsBgTransparent(transparentBgRoutes.includes(location.pathname));
	}, [location.pathname]);

	const navbarClasses = `fixed top-0 w-full z-20 transition-all duration-500 ${
		isScrolled || !isBgTransparent
			? "bg-white text-black shadow-md"
			: "text-white"
	}`;

	return (
		<Disclosure as="nav" className={navbarClasses}>
			{({ open }) => (
				<>
					<div
						className={`w-full px-4 sm:px-6 lg:px-8 ${
							!isScrolled && open ? "backdrop-blur-sm" : ""
						}`}
					>
						<div className="relative flex h-12 sm:h-16 items-center justify-between">
							<div className="absolute inset-y-0 right-2 flex items-center md:hidden">
								<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:opacity-60 hover:text-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon
											className={`block h-6 w-6 ${
												isScrolled || !isBgTransparent ? "text-black" : ""
											}`}
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className={`block h-6 w-6 ${
												isScrolled || !isBgTransparent ? "text-black" : ""
											}`}
											aria-hidden="true"
										/>
									)}
								</DisclosureButton>
							</div>
							<div className="flex flex-1 items-center justify-between sm:items-stretch">
								<div className="flex flex-shrink-0 items-center">
									<p className="text-xl sm:text-3xl font-semibold font-Noto-Sans-JP tracking-wide">
										Pheonex Solutions
									</p>
								</div>
								<div className="hidden md:ml-6 md:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link to={item.to} key={item.name}>
												<div
													className={`rounded-md px-3 py-2 text-base text-center font-medium hover:bg-indigo-600 
                                                ${
																									item.current
																										? "bg-indigo-500 text-white"
																										: "hover:text-white"
																								}`}
													aria-current={item.current ? "page" : undefined}
												>
													{item.name}
												</div>
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<DisclosurePanel className="md:hidden">
						<div
							className={`space-y-1 px-2 pb-3 pt-2 ${
								isScrolled ? "" : "backdrop-blur-sm"
							}`}
						>
							{navigation.map((item) => (
								<Link to={item.to} key={item.name}>
									<DisclosureButton
										className={`block rounded-md px-3 py-2 w-full text-base text-center font-medium ${
											item.current ? "" : "hover:opacity-70 hover:text-white"
										}`}
										aria-current={item.current ? "page" : undefined}
									>
										{item.name}
									</DisclosureButton>
								</Link>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
