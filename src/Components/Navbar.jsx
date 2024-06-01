const Navbar = () => {
	document.addEventListener("scroll", () => {
		const header = document.getElementById("navBar");
		const navGrowEffect = document.getElementById("navEffect");
		if (window.scrollY > 50) {
			header.classList.remove("bg-transparent");
			header.classList.add("bg-white");
			header.classList.remove("text-white");
			header.classList.add("text-black");
			navGrowEffect.classList.remove("p-8");
			navGrowEffect.classList.add("p-2");
		} else {
			header.classList.add("bg-transparent");
			header.classList.remove("bg-white");
			header.classList.remove("text-black");
			header.classList.add("text-white");
			navGrowEffect.classList.add("p-8");
			navGrowEffect.classList.remove("p-4");
		}
	});

	const pages = [
		{
			title: "Home",
			location: "#",
		},
		{
			title: "Features",
			location: "#",
		},
		{
			title: "About",
			location: "#",
		},
		{
			title: "Team",
			location: "#",
		},
		{
			title: "Contact",
			location: "#",
		},
	];
	return (
		<div
			id="navBar"
			className="fixed w-full transition-all duration-500 ease-in-out text-white z-10"
		>
			<div
				id="navEffect"
				className="bg-transparent flex justify-between container mx-auto p-8 transition-all duration-100 ease-in-out"
			>
				<div className="text-3xl font-semibold font-Noto-Sans-JP tracking-wide">
					Pheonex
				</div>
				<div className="flex gap-10 ">
					{pages.map((page) => (
						<div key={page.title} className="text-base flex items-center">
							{page.title}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
