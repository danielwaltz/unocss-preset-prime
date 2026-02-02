import { Button } from "primereact/button";
import type { PrimeUIXThemeColors } from "../../dist/theme.mjs";

export function Board({ className = "" }: { className?: string }) {
  const keys = [
    "stone",
    "neutral",
    "zinc",
    "gray",
    "slate",
    "rose",
    "pink",
    "fuchsia",
    "purple",
    "violet",
    "indigo",
    "blue",
    "sky",
    "cyan",
    "teal",
    "yellow",
    "amber",
    "orange",
    "red",
    "lime",
    "green",
    "emerald",
    "primary",
    "surface",
  ] satisfies (keyof PrimeUIXThemeColors)[];

  return (
    <div className={`${className} flex flex-col gap-6`}>
      <Button />

      <section>
        <h3 className="mbe-3">Background Colors</h3>

        <div className="flex flex-wrap gap-4">
          {keys.map((key) => (
            <div key={key} className={`bg-${key} px-4 py-2 rounded-xl`}>
              bg-{key}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mbe-3">Text Colors</h3>

        <div className="flex flex-wrap gap-y-2">
          {keys.map((key) => (
            <div key={key} className={`text-${key} px-4 py-2 rounded-xl`}>
              text-{key}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mbe-3">Icons</h3>

        <div className="flex flex-wrap gap-6">
          <div className="flex gap-4 items-center">
            <i className="pi-plus" />
            <span>pi-plus</span>
          </div>

          <div className="flex gap-4 items-center">
            <i className="i-prime-plus" />
            <span>i-prime-plus</span>
          </div>

          <div className="flex gap-4 items-center">
            <i className="pi-plus pi-fw" />
            <span>pi-plus pi-fw </span>
          </div>

          <div className="flex gap-4 items-center">
            <i className="pi-spinner pi-spin" />
            <span>pi-spinner pi-spin </span>
          </div>
        </div>
      </section>
    </div>
  );
}
