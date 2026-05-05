"use client";

import { useEffect } from "react";
import HeroSection from "@/components/LandingPage/HeroSection";
import Marquee from "@/components/LandingPage/marquee";
import ServicesSection from "@/components/LandingPage/servicesSection";
import AboutUs from "@/components/LandingPage/aboutUs";
import GallerySection from "@/components/LandingPage/gallerySection";
import Footer from "@/components/LandingPage/footer";
import DoorStep from "@/components/LandingPage/doorstep";
import Plans from "@/components/LandingPage/plans";

export default function Home() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
	}, []);

	return (
		<>
			<HeroSection />
			<Marquee />
			<AboutUs />
			<ServicesSection />
			<GallerySection />
			<Plans />
			<DoorStep />
			<Footer />
		</>
	);
}