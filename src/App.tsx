import Ticker from "@/components/Ticker";
import StickyCta from "@/components/StickyCta";
import Hero from "@/components/sections/Hero";
import Agitation from "@/components/sections/Agitation";
import Agents from "@/components/sections/Agents";
import Manifesto from "@/components/sections/Manifesto";
import Testimonials from "@/components/sections/Testimonials";
import PriceContrast from "@/components/sections/PriceContrast";
import Plans from "@/components/sections/Plans";
import FAQ from "@/components/sections/FAQ";
import Qualification from "@/components/sections/Qualification";
import Application from "@/components/sections/Application";
import Footer from "@/components/sections/Footer";

export default function App() {
  return (
    <main className="bg-[#f0f0ee] text-gray-900">
      <Ticker />
      <Hero />
      <Agitation />
      <Agents />
      <Manifesto />
      <Testimonials />
      <PriceContrast />
      <Plans />
      <FAQ />
      <Qualification />
      <Application />
      <Footer />
      <StickyCta />
    </main>
  );
}
