import { fetchAllProjects } from "@utils/fetchDato";

import { IAllProjectsQuery, IProjectRecord } from "@typesDef/dato";

import ProjectList from "@components/sections/ProjectList";

export type IAllProjectsContent = NonNullable<IAllProjectsQuery>["allProjects"];

export default async function PortfolioPage() {
  const data = await fetchAllProjects();

  const allProjects = data?.allProjects;

  /**
   * @todo - create ProjectList component
   */

  return (
    <div>
      <ProjectList projects={allProjects as IAllProjectsContent} />;
    </div>
  );
}
