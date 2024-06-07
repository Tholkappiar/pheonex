import search from "../../assets/search.svg";
import grid from "../../assets/grid.svg";
import persons from "../../assets/persons-connect.svg";
import arrowDown from "../../assets/images/arrow-bottom.png";
import arrowUp from "../../assets/images/arrow-top.png";

const ServiceOverview = () => {
	return (
		<div className="h-screen text-gray-600">
			<div className="flex flex-col items-center">
				<p className="text-3xl sm:text-5xl font-Noto-Sans-JP font-bold">
					Heading
				</p>
				<p className="text-base sm:text-lg italic font-Noto-Sans-JP sm:w-2/3 mt-4 sm:mt-8 text-center">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
					dolorum mollitia non totam doloribus, fugit nobis esse sunt nam
					corporis hic, omnis quae optio illo voluptate unde inventore ipsam!
					Sit incidunt assumenda, nobis molestiae rerum voluptatem natus id
					dolore consectetur?
				</p>
			</div>
			<div className="flex justify-center gap-20 text-center tracking-wider mt-32">
				{/* <div className="size-64 rounded-md shadow-md flex flex-col justify-center">
					<img src={search} alt="board" className="size-14 mx-auto" />
					<p className="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div> */}
				<div className="w-[170px] h-[170px]">
					<div className="relative w-full h-full">
						<div className="w-full h-full bg-indigo-600 rotate-45 rounded-lg"></div>
						<div className="absolute inset-0 bg-white shadow-xl flex justify-center items-center">
							<img src={search} alt="board" className="w-[56px] h-[56px]" />
						</div>
					</div>
					<p className="mt-20 text-center">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div>
				<div className="flex items-center">
					<img src={arrowUp} alt="" className="w-[120px] h-[60px]" />
				</div>
				<div className="w-[170px] h-[170px]">
					<div className="relative w-full h-full">
						<div className="w-full h-full bg-indigo-600 rotate-45 rounded-lg"></div>
						<div className="absolute inset-0 bg-white shadow-xl flex justify-center items-center">
							<img src={grid} alt="board" className="w-[56px] h-[56px]" />
						</div>
					</div>
					<p className="mt-20 text-center">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div>
				<div className="flex items-center">
					<img src={arrowDown} alt="" className="w-[120px] h-[60px]" />
				</div>
				<div className="w-[170px] h-[170px]">
					<div className="relative w-full h-full">
						<div className="w-full h-full bg-indigo-600 rotate-45 rounded-lg"></div>
						<div className="absolute inset-0 bg-white shadow-xl flex justify-center items-center">
							<img src={persons} alt="board" className="w-[56px] h-[56px]" />
						</div>
					</div>
					<p className="mt-20 text-center">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceOverview;
