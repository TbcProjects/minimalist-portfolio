import { configureSdk } from "@lib/datocms/client";
import { ISiteLayoutQuery, IHomepageQuery } from "@typesDef/dato";

export async function fetchLayoutData() {
  const siteLayoutData: ISiteLayoutQuery = await configureSdk().SiteLayout();

  if (!siteLayoutData) {
    return null;
  }

  return siteLayoutData;
}

export async function fetchHomepageData() {
  const homepageData: IHomepageQuery = await configureSdk().Homepage();

  if (!homepageData) {
    return null;
  }

  return homepageData;
}
