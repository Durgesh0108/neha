import React from "react";

export default function Consultation() {
	return (
		<div>
			<div className="w-full bg-gray-100">
				<div className="container items-center text-center p-16 flex flex-col gap-4 ">
					<h1 className="text-4xl font-semibold">
						The home design you crave
					</h1>
					<p className="text-2xl font-medium w-2/3">
						When you give your home the Livspace touch, you get both
						beauty and functionality. We employ state-of-the-art
						technology to ensure your home features a flawless look
						that lasts a very long time.
					</p>

					<button className="w-fit px-8 py-2 bg-[#eb595f] text-white rounded-full text-lg font-semibold">
						BOOK FREE CONSULTATION
					</button>
				</div>
			</div>
			<div className="w-full bg-[#5ba585] text-white">
				<div className="container items-center text-center p-16 flex flex-col gap-4 ">
					<h1 className="text-4xl font-semibold">
						Let our numbers do the talking!
					</h1>
					<div className="grid grid-cols-4 gap-24">
						<div className="flex flex-col gap-1">
							<h1 className="text-5xl font-bold">75000 +</h1>
							<p className="">#LivspaceHomes</p>
						</div>
						<div className="flex flex-col gap-1">
							<h1 className="text-5xl font-bold">3500 +</h1>
							<p className="">designers</p>
						</div>
						<div className="flex flex-col gap-1">
							<h1 className="text-5xl font-bold">40</h1>
							<p className="">cities</p>
						</div>
						<div className="flex flex-col gap-1">
							<h1 className="text-5xl font-bold">4</h1>
							<p className="">countries</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
