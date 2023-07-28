import { Board } from './Board';

export function App() {
  return (
    <main className="font-700">
      <h1 className="sr-only">UnoCSS Preset Prime Playground</h1>

      <div className="grid grid-cols-2">
        <Board className="dark min-h-screen bg-ground text-color p-6" />
        <Board className="light min-h-screen bg-ground text-color p-6" />
      </div>
    </main>
  );
}
