import { useTaskStore } from '@/stores/taskStore';

export function TaskBoard() {
  const tasks = useTaskStore((s: any) => s.tasks);

  return (
    <div>
      {tasks.map((t: any) => (
        <div key={t.id} className="border p-2 mb-2">
          {t.title} – {t.status}
        </div>
      ))}
    </div>
  );
}
