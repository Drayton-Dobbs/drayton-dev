"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

function ProjectsPage(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get("/api/getProjects");
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-[calc(100vh-60px)]">
      <h1 className="text-7xl font-bold mb-6 px-6 pt-6 bg-gradient-to-r from-teal-500 to-green-500 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-gray-100 dark:bg-secondary hover:bg-third cursor-pointer dark:shadow-none shadow-md "
          >
            <Link href={project.html_url}>
              <div className="card-body">
                <h2 className="text-lg text-gray-400 font-bold">
                  {project.name}
                </h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
