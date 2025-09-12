import Image from "next/image";

import Hero from "./components/Hero";
import ServicesSection from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
    </>
  );
}
