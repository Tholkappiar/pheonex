import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navigation = [
	{ name: "Home", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "About", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
	{ name: "Features", href: "#", current: false },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 100);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navbarClasses = `bg-transparent fixed w-full z-20 transition-all duration-500 ease-in-out ${
		isScrolled ? "bg-white text-black shadow-md" : "text-white"
	}`;

	return (
		<Disclosure as="nav" className={navbarClasses}>
			{({ open }) => (
				<>
					<div
						className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${
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
												isScrolled ? "text-black" : "text-white"
											}`}
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className={`block h-6 w-6 ${
												isScrolled ? "text-black" : "text-white"
											}`}
											aria-hidden="true"
										/>
									)}
								</DisclosureButton>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
								<div className="flex flex-shrink-0 items-center">
									<p className="text-xl sm:text-3xl font-semibold font-Noto-Sans-JP tracking-wide">
										Pheonex Solutions
									</p>
								</div>
								<div className="hidden md:ml-6 md:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={`rounded-md px-3 py-2 text-base font-medium hover:bg-indigo-600 
												${isScrolled ? "text-black" : "text-white"}
												${item.current ? "bg-indigo-500 text-white" : "hover:text-white"}
												`}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
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
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.href}
									className={`block rounded-md px-3 py-2 text-base text-center font-medium ${
										item.current ? "" : "hover:opacity-70 hover:text-white"
									} ${isScrolled ? "text-black" : "text-white"}`}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
