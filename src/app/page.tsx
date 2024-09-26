"use client";

import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

interface Project {
  id: string;
  name: string;
  description?: string; // Optional field
}

interface ProjectStateType {
  selectedProjectId: undefined | null;
  projects: Project[];
}

const Home = () => {
  const [projectState, setProjectState] = useState<ProjectStateType>({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    // Side note: 'undefined' means we're doing nothing and 'null' means we're adding a new project

    setProjectState((prevState: ProjectStateType) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
};

export default Home;
