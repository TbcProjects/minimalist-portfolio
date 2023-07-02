import HomePageContainer from "@/components/containers/HomePageContainer";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ContactBanner from "@/components/sections/ContactBanner";

export default function Home() {
  return (
    <HomePageContainer as={"main"}>
      <Hero />
      <AboutMe />
      <ContactBanner />
    </HomePageContainer>
  );
}
