import { create } from 'zustand';

interface TaskState {
  tasks: any[];
  addTask: (task: any) => void;
  toggleTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, is_completed: !t.is_completed } : t)
  })),
}));
