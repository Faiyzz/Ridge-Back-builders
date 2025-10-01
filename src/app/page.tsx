import HomePage from "./components/Hero";
import OurWorkSection from "./components/OurWorkSection";
import ServicesSection from "./components/Services";
export default function Home() {
  return (
    <>
      <HomePage />
      <ServicesSection />
      {/*  <LatestNews />*/}
      <OurWorkSection />
      {/*  <ContactSection />*/}
      {/* <NewsletterSection />*/}
    </>
  );
}
