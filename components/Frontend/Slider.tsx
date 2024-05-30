import Image from "next/image";
import React from "react";

export default function Slider() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<Image
				src={
					"https://res.cloudinary.com/dttieobbt/image/upload/v1717092582/1440x730-1657194139-erPsT_faad43.jpg"
				}
				alt="hero-Image"
				width={1000}
				height={1}
				className="w-full h-full object-cover"
			/>
		</div>
	);
}
