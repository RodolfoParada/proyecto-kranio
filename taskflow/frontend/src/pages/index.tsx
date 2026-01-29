// src/pages/index.tsx
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">TaskFlow</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2"
        onClick={() => router.push('/login')}
      >
        Go to Login
      </button>
    </div>
  );
}
