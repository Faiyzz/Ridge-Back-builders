import ContactSection from "./components/Faq";
import QuoteSection from "./components/getQuote";
import HomePage from "./components/Hero";
import LatestNews from "./components/Latestnews";
import NewsletterSection from "./components/Newsletter";
import OurWorkSection from "./components/OurWorkSection";
import ServicesSection from "./components/Services";

export default function Home() {
  return (
    <>
      <HomePage />
      <ServicesSection />
      <LatestNews />
      <QuoteSection />
      <OurWorkSection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}
