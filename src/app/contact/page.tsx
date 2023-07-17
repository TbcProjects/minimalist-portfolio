import { fetchContactpageData } from "@utils/fetchDato";

import { IContactpageQuery } from "@typesDef/dato";

// sections
import ContactDetail from "@components/sections/ContactDetail";

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
  );

  return (
    <main>
      <ContactDetail />
      <pre>{JSON.stringify(contactDetailContent, null, 2)}</pre>
    </main>
  );
}
