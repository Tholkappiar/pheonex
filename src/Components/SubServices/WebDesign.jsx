import Masonry from "react-layout-masonry";
import securesvg from "../../assets/secure.svg";
import workers from "../../assets/workers.svg";
import responsibility from "../../assets/responsibility.svg";
import growth from "../../assets/growth.svg";

const WebDesign = () => {
	return (
		<div className="pt-40 container mx-auto">
			<div className="m-2">
				<p className="p-2 md:w-1/2 text-lg font-semibold text-white bg-indigo-800 mx-auto rounded-lg text-center">
					Software Development
				</p>
			</div>
			<div className="flex justify-between my-20">
				<div className="md:w-1/2 p-4">
					
					<p className="text-xl font-semibold mt-10">Description</p>
					<p className="indent-20 my-4 font-light leading-7">
					Software development is the intricate process of designing, creating, testing, and maintaining software applications and systems. It begins with requirement analysis, where developers understand the needs and objectives of users or clients. This is followed by the design phase, where the architecture and components of the software are planned. The implementation phase involves writing the actual code using various programming languages. Once the code is written, it undergoes thorough testing to identify and fix any bugs, ensuring the software works correctly. After successful testing, the software is deployed and made available for use.
					</p>
					<div className="mt-20">
						<div className="flex gap-10 items-center my-14">
							<img src={securesvg} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Planning</p>
								<p className="my-2 font-light leading-7">
								The planning phase at Pheonex involves defining the project goals, scope, and requirements. We work closely with our clients to understand their needs, conduct feasibility studies, and create a comprehensive project plan. This phase is crucial for setting clear objectives, timelines, and resources needed for the project.
								</p>
							</div>
						</div>
						<div className="flex gap-10 items-center my-14">
							<img src={workers} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Design</p>
								<p className="my-2 font-light leading-7">
								During the design phase, our developers create the architecture of the software. This includes designing the system structure, user interfaces, and database schema. We produce detailed design documents and prototypes to provide a clear blueprint for the development team, ensuring that the software structure and components are well-defined and aligned with client requirements.

3. Development
								</p>
							</div>
						</div>
						<div className="flex gap-10 items-center my-14">
							<img src={responsibility} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Development</p>
								<p className="my-2 font-light leading-7">
								In the development phase, the actual coding of the software begins. Our developers write the code according to the design specifications. This phase involves setting up the development environment, writing and compiling code, and integrating different modules. Regular testing and debugging are conducted to ensure the code functions correctly and meets the requirements.
								</p>
							</div>
						</div>
						<div className="flex gap-10 items-center my-14">
							<img src={growth} className="size-10" alt="" />
							<div>
								<p className="text-xl font-semibold">Testing and Deployment
								</p>
								<p className="my-2 font-light leading-7">
								The testing phase involves rigorous testing of the software to identify and fix any bugs or issues. Various types of testing, such as unit testing, integration testing, and user acceptance testing, are performed. Once the software passes all tests, it is deployed to the production environment. After deployment, the software is monitored for any post-release issues, and necessary updates and maintenance are performed.
								</p>
							</div>
						</div>
					</div>
					<div>
						<p className="text-2xl font-Noto-Sans-JP font-bold text-indigo-600 mt-20">
						Why Choose 
							
							us?
						</p>
						<p className="font-Noto-Sans-JP leading-7 text-gray-600 tracking-wide my-10">
						Choosing Pheonex means partnering with a team that is dedicated to your success. Our client-focused approach ensures that we deliver solutions that are not only technologically advanced but also aligned with your business goals. We are committed to building long-term relationships based on trust, transparency, and mutual growth.
						</p>
						<a href="/contact" className="py-1 px-2 border-2 border-gray-200 font-Noto-Sans-JP text-gray-80000 inline-block rounded-xl text-sm">
							Contact us and learn more on Socials
						</a>
					</div>
				</div>
				<div className="w-2/5 hidden md:block">
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
