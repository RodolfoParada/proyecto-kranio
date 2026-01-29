// src/stores/taskStore.ts
import { create } from 'zustand';

export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

interface TaskState {
  tasks: Task[];
  moveTask: (id: string, status: TaskStatus) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    { id: '1', title: 'Task One', status: 'todo' },
    { id: '2', title: 'Task Two', status: 'done' },
  ],

  moveTask: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, status } : t
      ),
    })),
}));
