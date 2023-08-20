import { configureSdk } from "@lib/datoCMS/client";
import {
  ISiteLayoutQuery,
  IHomepageQuery,
  IContactpageQuery,
  IAllProjectsQuery,
} from "@typesDef/dato";

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

export async function fetchContactpageData() {
  const contactpageData: IContactpageQuery = await configureSdk().Contactpage();

  if (!contactpageData) {
    return null!;
  }

  return contactpageData;
}

export async function fetchAllProjects() {
  const allProjects: IAllProjectsQuery = await configureSdk().AllProjects();

  if (!allProjects) {
    return null;
  }

  return allProjects;
}
