import Header from "@/components/lp/Header";
import Hero from "@/components/lp/Hero";
import Problem from "@/components/lp/Problem";
import ServiceOverview from "@/components/lp/ServiceOverview";
import Features from "@/components/lp/Features";
import CaseStudies from "@/components/lp/CaseStudies";
import ShopComparison from "@/components/lp/ShopComparison";
import Flow from "@/components/lp/Flow";
import FAQ from "@/components/lp/FAQ";
import CTA from "@/components/lp/CTA";
import Footer from "@/components/lp/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <ServiceOverview />
        <Features />
        <CaseStudies />
        <ShopComparison />
        <Flow />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
