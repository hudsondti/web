import BannerHero from "@/src/components/BannerHero/BannerHero";
import ServicesApp from "@/src/components/ServicesApp/ServicesApp";
import Footer from "@/src/components/Footer/Footer";

export default function Home() {
  return (
    <section className="pt-[88px]">
      <BannerHero />
      <ServicesApp />
    </section>
  );
}
