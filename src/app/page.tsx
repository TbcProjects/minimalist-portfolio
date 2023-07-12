// section components
import Hero from "@components/sections/Hero";
import AboutMe from "@components/sections/AboutMe";
import ContactBanner from "@components/sections/ContactBanner";

export default async function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <ContactBanner />
    </main>
  );
}
