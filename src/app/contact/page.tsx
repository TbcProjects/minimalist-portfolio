import { fetchContactpageData } from "@utils/fetchDato";

import { IContactpageQuery } from "@typesDef/dato";
import { ISocialContent } from "@app/layout";

// sections
import ContactDetail from "@components/sections/ContactDetail";
import ContactForm from "@components/sections/ContactForm";

type IContactpageData = NonNullable<
  IContactpageQuery["contactpage"]
>["contactpageContent"];

export type IContactpageContent = {
  [K in NonNullable<
    IContactpageData[number]["__typename"]
  >]: IContactpageData[number] & {
    __typename: K;
  };
};

export type IContactDetailContent =
  IContactpageContent["SectionContactDetailRecord"];

export type IContactFormContent =
  IContactpageContent["SectionContactFormRecord"];

const findContentByKey = (content: IContactpageData, key: string) => {
  return content?.find(
    (item) => item._modelApiKey && item._modelApiKey === key
  );
};

export default async function ContactPage() {
  const data = await fetchContactpageData();

  const contactpageData = data.contactpage
    ?.contactpageContent as IContactpageData;

  const contactDetailContent = findContentByKey(
    contactpageData,
    "section_contact_detail"
  ) as IContactDetailContent;

  const socialLinks = findContentByKey(
    contactpageData,
    "module_social"
  ) as ISocialContent;

  return (
    <main>
      <ContactDetail content={contactDetailContent} links={socialLinks} />
      <ContactForm />
    </main>
  );
}
