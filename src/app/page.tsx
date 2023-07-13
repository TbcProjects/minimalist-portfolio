import { fetchHomepageData } from "@utils/fetchDato";

import { IHomepageQuery } from "@typesDef/dato";

// section components
import Hero from "@components/sections/Hero";
import AboutMe from "@components/sections/AboutMe";
import ContactBanner from "@components/sections/ContactBanner";

type IHomepageData = NonNullable<IHomepageQuery["homepage"]>["homepageContent"];

export type IHomepageContent = {
  [K in NonNullable<
    IHomepageData[number]["__typename"]
  >]: IHomepageData[number] & {
    __typename: K;
  };
};

export type IHeroContent = IHomepageContent["SectionHeroRecord"];

export type IAboutMeContent = IHomepageContent["SectionAboutMeRecord"];

export type IContactBanner = IHomepageContent["SectionContactBannerRecord"];

const findContentByKey = (content: IHomepageData, key: string) => {
  return content?.find(
    (item) => item._modelApiKey && item._modelApiKey === key
  );
};

export default async function Home() {
  const data = await fetchHomepageData();
  const homepageData = data?.homepage?.homepageContent as IHomepageData;

  const heroSectionContent = findContentByKey(
    homepageData,
    "section_hero"
  ) as IHeroContent;

  const aboutMeSection = findContentByKey(
    homepageData,
    "section_about_me"
  ) as IAboutMeContent;

  const contactBannerSection = findContentByKey(
    homepageData,
    "section_contact_banner"
  ) as IContactBanner;

  return (
    <main>
      <Hero content={heroSectionContent} />
      <AboutMe />
      <ContactBanner />

      <pre>{JSON.stringify(heroSectionContent, null, 2)}</pre>
      <pre>{JSON.stringify(aboutMeSection, null, 2)}</pre>
      <pre>{JSON.stringify(contactBannerSection, null, 2)}</pre>
    </main>
  );
}
