import { Link } from "react-router-dom";
import { Socials } from "../../util/Constants";

const Footer = () => {
	const footerLinks = [
		{
			title: "Company",
			links: [
				{ text: "Home", url: "/" },
				{ text: "Service", url: "/service" },
				{ text: "About", url: "/about" },
				{ text: "Contact Us", url: "/contact" },
			],
		},
		{
			title: "Help center / Community",
			links: [
				{
					text: "LinkedIn",
					url: Socials.LinkedIn,
				},
				{ text: "Github", url: Socials.Github },
				{ text: "Twitter", url: Socials.Twitter },
			],
		},
	];

	const icons = [
		{
			name: "Twitter",
			url: Socials.Twitter,
			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="tabler-icon tabler-icon-brand-x size-5 text-muted dark:text-muted-dark hover:text-black"
				>
					<path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
					<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
				</svg>
			),
		},
		{
			name: "LinkedIn",
			url: Socials.LinkedIn,

			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="tabler-icon tabler-icon-brand-linkedin size-7 text-muted dark:text-muted-dark hover:text-indigo-600"
				>
					<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
					<path d="M8 11l0 5"></path>
					<path d="M8 8l0 .01"></path>
					<path d="M12 16l0 -5"></path>
					<path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
				</svg>
			),
		},
		{
			name: "Github",
			url: Socials.Github,

			svg: (
				<svg
					className="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fillRule="evenodd"
						d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	];

	return (
		<div>
			<footer className="bg-gray-600">
				<div className="mx-auto w-full">
					<div className="flex justify-center">
						<div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 m-6 w-full justify-around text-center">
							{footerLinks.map((section, index) => (
								<div key={index}>
									<h2 className="mb-6 text-sm font-semibold uppercase text-white">
										{section.title}
									</h2>
									<ul className="text-gray-400 font-medium">
										{section.links.map((link, idx) => (
											<li key={idx} className="mb-4">
												<Link to={link.url} className="hover:underline">
													{link.text}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className="px-4 py-6 bg-gray-600 flex flex-col sm:flex-row justify-center items-center font-semibold">
						<span className="text-sm text-gray-300 text-center">
							© 2023 <a href="#">Phenox Solutions™</a>. All Rights Reserved.
						</span>
						<div className="flex mt-4 sm:mt-0 items-center justify-center space-x-5 rtl:space-x-reverse pl-4">
							{icons.map((icons) => (
								<Link
									key={icons.name}
									target="_blank"
									to={icons.url}
									className="text-gray-400 hover:text-white"
								>
									{icons.svg}
									<span className="sr-only">{icons.name}</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
