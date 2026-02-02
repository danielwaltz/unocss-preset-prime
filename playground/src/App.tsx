import { Board } from "./Board";

export function App() {
  return (
    <main className="font-bold">
      <h1 className="sr-only">UnoCSS Preset Prime Playground</h1>

      <Board className="text-surface-text p-6 bg-surface-ground min-h-screen" />
    </main>
  );
}
