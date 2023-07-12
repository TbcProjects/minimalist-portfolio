import { configureSdk } from "@lib/datocms/client";
import { ISiteLayoutQuery } from "@typesDef/dato";

export async function fetchLayoutData() {
  const siteLayoutData: ISiteLayoutQuery = await configureSdk().SiteLayout();

  if (!siteLayoutData) {
    return null;
  }

  return siteLayoutData;
}
