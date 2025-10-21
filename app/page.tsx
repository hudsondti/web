import BannerHero from "@/src/components/BannerHero/BannerHero";
import ServicesApp from "@/src/components/ServicesApp/ServicesApp";
import Footer from "@/src/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <section className="pt-[88px]">
      <BannerHero />
      <ServicesApp />
      <Footer />
    </section>
  );
}
