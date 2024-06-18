import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Socials, emailJsCons } from "../util/Constants";
import { Link } from "react-router-dom";

export default function ContactUs() {
	const [contactForm, setContactForm] = useState({
		name: "",
		mobile: "",
		service: "",
		email: "",
		message: "",
	});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const serviceID = emailJsCons.serviceID;
		const templateID = emailJsCons.templateID;
		const userID = emailJsCons.userID;
		emailjs.send(serviceID, templateID, contactForm, userID).then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
				setContactForm({
					name: "",
					mobile: "",
					service: "",
					email: "",
					message: "",
				});
				setIsSubmit(true);
			},
			(error) => {
				console.log("FAILED...", error);
				alert("Failed to send message. Please try again later.");
				setIsSubmit(false);
			}
		);
	};

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
		<section className="text-gray-600 body-font relative mt-28">
			<p className="text-gray-600 text-2xl sm:text-3xl text-center font-Noto-Sans-JP font-bold underline decoration-dashed tracking-wider">
				Contact Us
			</p>
			<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 sm:p-5 md:p-10 flex flex-col gap-4 md:flex-row items-end justify-start relative">
					<iframe
						width="100%"
						height="100%"
						className="md:absolute inset-0"
						frameBorder="0"
						title="map"
						marginHeight="0"
						marginWidth="0"
						scrolling="no"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5136207027385!2d80.27235512550152!3d13.002930784623183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e34657ca11%3A0xcafd01bdfa5e4e26!2s16%2C%2012%2C%202nd%20St%20Rd%2C%20Urrur%20Kuppam%2C%20Besant%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600090!5e0!3m2!1sen!2sin!4v1718166976927!5m2!1sen!2sin"
						// style={{ filter: "opacity(0.4)" }}
					/>
					<div className="bg-white md:relative flex flex-wrap py-6 rounded shadow-md">
						<div className="lg:w-1/2 px-6">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
								ADDRESS
							</h2>
							<p className="mt-1">
								16, 12, 2nd St Rd, Urrur Kuppam, Besant Nagar, Chennai, Tamil
								Nadu 600090
							</p>
						</div>
						<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
								EMAIL
							</h2>
							<a className="text-indigo-500 leading-relaxed">
								altruistybusiness@gmail.com
							</a>
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
								PHONE
							</h2>
							<p className="leading-relaxed">+91-866-783-9838</p>
						</div>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
				>
					<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
						Contact Us
					</h2>
					<p className="leading-relaxed mb-5 text-gray-600">
						We'd love to hear from you! Please fill out the form below to get in
						touch.
					</p>
					<div className="relative mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-600">
							Name
						</label>
						<input
							type="text"
							id="name"
							required
							onChange={(e) => handleChange(e)}
							name="name"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="mobile" className="leading-7 text-sm text-gray-600">
							Mobile
						</label>
						<input
							type="text"
							id="mobile"
							required
							onChange={(e) => handleChange(e)}
							name="mobile"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="service"
							className="leading-7 text-sm text-gray-600"
						>
							Service Opted / Query About
						</label>
						<input
							type="text"
							id="service"
							required
							onChange={(e) => handleChange(e)}
							name="service"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							required
							onChange={(e) => handleChange(e)}
							name="email"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-600"
						>
							Message
						</label>
						<textarea
							id="message"
							onChange={(e) => handleChange(e)}
							required
							name="message"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<button
						type="submit"
						className={`text-white ${
							isSubmit ? "bg-green-500" : "bg-indigo-500"
						} border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
					>
						{isSubmit ? "Submitted !" : "Submit"}
					</button>
					<p className="text-xs text-gray-500 mt-3">
						We respect your privacy and will get back to you as soon as
						possible.
					</p>
					<div className="flex mx-auto mt-8 gap-4 items-center justify-center">
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
				</form>
			</div>
		</section>
	);
}
