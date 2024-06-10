import search from "../../assets/search.svg";
import grid from "../../assets/grid.svg";
import persons from "../../assets/persons-connect.svg";
import arrowDown from "../../assets/images/arrow-bottom.png";
import arrowUp from "../../assets/images/arrow-top.png";
import triangle from "../../assets/images/shape-tri.png";
import roundFill from "../../assets/images/round-full.png";
import roundTrans from "../../assets/images/round-trans.png";

const ServiceOverview = () => {
	return (
		<div className="text-gray-600">
			<div className="flex flex-col items-center">
				<p className="text-3xl sm:text-5xl font-Noto-Sans-JP font-bold">
					Heading
				</p>
				<p className="text-base sm:text-lg italic font-Noto-Sans-JP sm:w-2/3 mt-4 sm:mt-8 text-center p-4">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
					dolorum mollitia
				</p>
			</div>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-56 lg:gap-12 text-center tracking-wider mt-32 mb-64 relative">
				<img
					src={triangle}
					alt=""
					className="hidden lg:block absolute lg:left-0 lg:top-36 lg:ml-40 animate-spin-slow"
				/>
				<div className="w-[170px] h-[170px]">
					<div className="relative w-full h-full">
						<div className="w-full h-full bg-indigo-600 rotate-45 rounded-lg"></div>
						<div className="absolute inset-0 bg-white shadow-xl flex justify-center items-center">
							<img src={search} alt="board" className="w-[56px] h-[56px]" />
						</div>
					</div>
					<p className="mt-16 lg:mt-20 text-center">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div>
				<div className="hidden lg:flex items-center">
					<img src={arrowUp} alt="" className="" />
				</div>
				<div className="w-[170px] h-[170px]">
					<div className="relative w-full h-full">
						<div className="w-full h-full bg-indigo-600 rotate-45 rounded-lg"></div>
						<div className="absolute inset-0 bg-white shadow-xl flex justify-center items-center">
							<img src={grid} alt="board" className="w-[56px] h-[56px]" />
						</div>
					</div>
					<p className="mt-16 lg:mt-20 text-center">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div>
				<div className="hidden lg:flex items-center">
					<img src={arrowDown} alt="" className="" />
				</div>
				<div className="w-[170px] h-[170px]">
					<div className="relative w-full h-full">
						<div className="w-full h-full bg-indigo-600 rotate-45 rounded-lg"></div>
						<div className="absolute inset-0 bg-white shadow-xl flex justify-center items-center">
							<img src={persons} alt="board" className="w-[56px] h-[56px]" />
						</div>
					</div>
					<p className="mt-16 lg:mt-20 text-center pb-28">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div>
				<img
					src={roundFill}
					alt=""
					className="hidden lg:block absolute lg:top-auto lg:right-0 lg:bottom-36 lg:mr-40 animate-spin-slow -z-20"
				/>
				<img
					src={roundTrans}
					alt=""
					className="hidden lg:block absolute lg:top-auto lg:right-0 lg:bottom-36 lg:mr-40 animate-spin-slow -z-10"
				/>
			</div>
		</div>
	);
};

export default ServiceOverview;
