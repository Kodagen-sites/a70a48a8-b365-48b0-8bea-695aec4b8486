import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrubHero from "@/components/sections/ScrubHero";
import HomeSections from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrubHero />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
