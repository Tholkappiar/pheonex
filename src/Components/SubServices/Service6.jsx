/* eslint-disable react/no-unescaped-entities */
import Home from "../../assets/Home.svg";
import bookmark from "../../assets/bookmark.svg";
import person from "../../assets/person.svg";
import world from "../../assets/world.svg";
import message from "../../assets/messageArrow.svg";
import reward from "../../assets/reward.svg";
import service6Image from "../../assets/images/Service6-image.jpg";

const Service6 = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-14 mx-auto">
				<div className="flex flex-col md:flex-row -mx-4 -mb-10">
					<div className="md:w-1/2 mb-10 px-4">
						<div className="rounded-md w-full flex flex-col items-center sticky top-20">
							<div className="w-full md:w-3/4 rounded-md shadow-2xl">
								<div className="flex items-center justify-center gap-4 m-4">
									<img src={Home} alt="home-icon" className="size-8" />
									<p className="font-Noto-Sans-JP ">Fast Development</p>
								</div>
								<div className="flex items-center justify-center gap-4 m-4">
									<img src={bookmark} alt="home-icon" className="size-8" />
									<p className="font-Noto-Sans-JP ">Fast Development</p>
								</div>
								<div className="flex items-center justify-center gap-4 m-4">
									<img src={person} alt="home-icon" className="size-8" />
									<p className="font-Noto-Sans-JP ">Fast Development</p>
								</div>
								<div className="flex items-center justify-center gap-4 m-4">
									<img src={world} alt="home-icon" className="size-8" />
									<p className="font-Noto-Sans-JP ">Fast Development</p>
								</div>
							</div>
							<div className="w-full md:w-3/4 rounded-md shadow-2xl bg-white mt-8">
								<div className="flex items-center justify-center gap-4 rounded-md m-4">
									<img src={message} alt="home-icon" className="size-8" />
									<p>Fast Development</p>
								</div>
							</div>
							<div className="w-full md:w-3/4 rounded-md shadow-2xl bg-white mt-4">
								<div className="flex items-center justify-center gap-4 rounded-md m-4">
									<img src={reward} alt="home-icon" className="size-8" />
									<p>Fast Development</p>
								</div>
							</div>
						</div>
					</div>
					<div className="md:w-1/2 mb-10 px-4">
						<div className="rounded-lg h-64 overflow-hidden">
							<img
								alt="content"
								className="object-cover object-center h-full w-full"
								src={service6Image}
							/>
						</div>
						<h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
							What we're Building
						</h2>
						<p className="leading-relaxed text-base">
							Williamsburg occupy sustainable snackwave gochujang. Pinterest
							cornhole brunch, slow-carb neutra irony.
						</p>
						<p className="leading-relaxed text-base mt-10">
							Williamsburg occupy sustainable snackwave gochujang. Pinterest
							cornhole brunch, slow-carb neutra irony.
						</p>
						<p className="leading-relaxed text-base mt-4">
							My good sir cup of char no biggie knees up happy days absolutely
							bladdered don't get shirty with me chimney pot James Bond he lost
							his bottle me old mucker, bobby nice one cack codswallop what a
							load of rubbish Jeffrey barmy blower tomfoolery, crikey only a
							quid at public school mufty tosser up the duff say Richard I don't
							want no agro. Owt to do with me barney quaint jolly good off his
							nut vagabond pardon you gutted mate the little rotter excuse my
							French, the bee's knees don't get shirty with me he nicked it give
							us a bell zonked lavatory Charles gosh, Eaton the BBC is victoria
							sponge a William bog what a load of rubbish. Smashing only a quid
							cockup he lost his bottle bugger Jeffrey mufty, starkers blatant
							zonked easy peasy brolly car boot, blimey at public school cheeky
							bugger you mug david. Tomfoolery a load of old tosh Queen's
							English lemon squeezy old hunky-dory mush chap give us a bell
							bloke, chancer knackered cheesed off buggered tinkety tonk old
							fruit car boot only a quid spiffing good time chinwag, he lost his
							bottle pukka gutted mate naff horse play cup of tea baking cakes a
							blinding shot. bobby the wireless matie boy show.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service6;
