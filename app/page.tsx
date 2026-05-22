import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import HomeCTA from "@/components/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
