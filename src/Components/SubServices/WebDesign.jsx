import Masonry from "react-layout-masonry";
import securesvg from "../../assets/secure.svg";
import workers from "../../assets/workers.svg";
import responsibility from "../../assets/responsibility.svg";
import growth from "../../assets/growth.svg";

const WebDesign = () => {
	return (
		<div className="pt-40 container mx-auto">
			<div className="w-full">
				<p className="p-2 w-1/2 text-lg font-semibold text-white bg-indigo-800 mx-auto rounded-lg m-4 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit
				</p>
			</div>
			<div className="flex justify-between my-20">
				<div className="w-1/2">
					<p className="text-base font-Noto-Sans-JP font-bold text-indigo-600">
						<span className="mr-4">{"<"}</span>Back to the Service Page{" "}
					</p>
					<p className="text-xl font-semibold mt-10">Description</p>
					<p className="indent-20 my-4 font-light leading-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						repudiandae non unde aliquid harum! Velit amet ipsam dicta id
						fugiat! Deserunt reprehenderit quod architecto dicta sequi assumenda
						obcaecati voluptatem laboriosam eaque reiciendis libero delectus
						dolore beatae, esse quidem porro at aspernatur vel doloremque
						consectetur. Necessitatibus quam ducimus eos dignissimos laborum!
					</p>
					<div className="mt-20">
						<div className="flex gap-10 items-center my-14">
							<img src={securesvg} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Description</p>
								<p className="my-2 font-light leading-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis repudiandae non unde aliquid harum! Velit amet ipsam
									dicta id fugiat!
								</p>
							</div>
						</div>
						<div className="flex gap-10 items-center my-14">
							<img src={workers} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Description</p>
								<p className="my-2 font-light leading-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis repudiandae non unde aliquid harum! Velit amet ipsam
									dicta id fugiat!
								</p>
							</div>
						</div>
						<div className="flex gap-10 items-center my-14">
							<img src={responsibility} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Description</p>
								<p className="my-2 font-light leading-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis repudiandae non unde aliquid harum! Velit amet ipsam
									dicta id fugiat!
								</p>
							</div>
						</div>
						<div className="flex gap-10 items-center my-14">
							<img src={growth} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Description</p>
								<p className="my-2 font-light leading-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis repudiandae non unde aliquid harum! Velit amet ipsam
									dicta id fugiat!
								</p>
							</div>
						</div>
					</div>
					<div>
						<p className="text-2xl font-Noto-Sans-JP font-bold text-indigo-600 mt-20">
							Team Love at Semiflat knows
							<br />
							no bounds_
						</p>
						<p className="font-Noto-Sans-JP leading-7 text-gray-600 tracking-wide my-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
							cumque nihil error laboriosam eos nulla nisi, debitis illo?
							Asperiores vel, neque veritatis assumenda soluta nisi excepturi
							sunt dolorum perferendis nobis?laboriosam eos nulla nisi, debitis
							illo? Asperiores vel, neque veritatis assumenda soluta nisi
							excepturi sunt dolorum perferendis nobis?
						</p>
						<p className="py-1 px-2 border-2 border-gray-200 font-Noto-Sans-JP text-gray-80000 inline-block rounded-xl text-sm">
							Contact us and learn more on Socials
						</p>
					</div>
				</div>
				<div className="w-2/5">
					<Masonry
						columns={{ 640: 1, 1024: 2, 1280: 2 }}
						gap={16}
						className="mt-10 sticky top-32"
					>
						<img
							className="rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
							alt=""
						/>
						<img
							className="rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
							alt=""
						/>
						<img
							className="rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
							alt=""
						/>
						<img
							className="rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
							alt=""
						/>
					</Masonry>
				</div>
			</div>
		</div>
	);
};

export default WebDesign;
