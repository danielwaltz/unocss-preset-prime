import { Board } from "./Board";

export function App() {
  return (
    <main className="font-700">
      <h1 className="sr-only">UnoCSS Preset Prime Playground</h1>

      <Board className="bg-surface-ground text-surface-text min-h-screen p-6" />
    </main>
  );
}
