// src/stores/projectStore.ts
import { create } from 'zustand';

export interface Project {
  id: string;
  name: string;
  description?: string;
}

interface ProjectState {
  projects: Project[];
  createProject: (project: Omit<Project, 'id'>) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],

  createProject: (project) =>
    set((state) => ({
      projects: [
        ...state.projects,
        { id: crypto.randomUUID(), ...project },
      ],
    })),
}));
