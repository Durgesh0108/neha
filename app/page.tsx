import Consultation from "@/components/Frontend/Consultation";
import Navbar from "@/components/Frontend/Navbar";
import Slider from "@/components/Frontend/Slider";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<Navbar />
      <Slider />
      <Consultation/>
		</div>
	);
}
