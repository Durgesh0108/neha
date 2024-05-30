import React from "react";

export default function Navbar() {
	return (
		<div className="w-full bg-white flex justify-between p-5 items-center">
			<div className="uppercase text-2xl font-semibold">LivSpace</div>
			<div>
				<button className="px-8 py-2 bg-[#eb595f] text-white rounded-full text-lg font-semibold">
					Get Free Quote
				</button>
			</div>
		</div>
	);
}
