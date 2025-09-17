import ContactSection from "./components/Faq";
import QuoteSection from "./components/getQuote";
import HomePage from "./components/hero";
import LatestNews from "./components/Latestnews";
import NewsletterSection from "./components/Newsletter";
import OurWorkSection from "./components/OurWorkSection";
import ServicesSection from "./components/services";

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
