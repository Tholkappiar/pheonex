import search from "../../assets/search.svg";
import grid from "../../assets/grid.svg";
import persons from "../../assets/persons-connect.svg";

const ServiceOverview = () => {
	return (
		<div className="h-[400px] sm:h-[500px] 2xl:h-[600px] text-gray-600">
			<div className="flex flex-col items-center my-20">
				<p className="text-3xl sm:text-5xl font-Noto-Sans-JP font-bold">
					Heading
				</p>
				<p className="text-base sm:text-lg italic font-Noto-Sans-JP sm:w-2/3 mt-4 sm:mt-6 text-center">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
					dolorum mollitia non totam doloribus, fugit nobis esse sunt nam
					corporis hic, omnis quae optio illo voluptate unde inventore ipsam!
					Sit incidunt assumenda, nobis molestiae rerum voluptatem natus id
					dolore consectetur?
				</p>
			</div>
			<div className="flex justify-center gap-20 text-center tracking-wider">
				<div className="size-64 rounded-md shadow-md flex flex-col justify-center">
					<img src={search} alt="board" className="size-14 mx-auto" />
					<p className="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
						laudantium!
					</p>
				</div>
				<div className="size-64 rounded-md shadow-md flex flex-col justify-center">
					<img src={grid} alt="board" className="size-14 mx-auto" />
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
						voluptas.
					</p>
				</div>
				<div className="size-64 rounded-md shadow-md flex flex-col justify-center">
					<img src={persons} alt="board" className="size-14 mx-auto" />
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nam!
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceOverview;
