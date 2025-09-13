import ServicesSection from "./components/services";
import LatestNews from "./components/Latestnews";
import QuoteSection from "./components/getQuote";
import OurWorkSection from "./components/OurWorkSection";
import ContactSection from "./components/Faq";
import HomePage from "./components/hero";
import NewsletterSection from "./components/Newsletter";

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
