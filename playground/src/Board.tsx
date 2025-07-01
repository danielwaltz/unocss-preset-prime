import type { PrimeThemeColor } from "../../dist";

export function Board({ className = "" }: { className?: string }) {
  const keys = [
    "blue",
    "green",
    "yellow",
    "cyan",
    "pink",
    "indigo",
    "teal",
    "orange",
    "bluegray",
    "purple",
    "red",
    "gray",
    "primary",
    "surface",
  ] satisfies PrimeThemeColor[];

  return (
    <div className={`${className} flex flex-col gap-6`}>
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
          <div className="flex items-center gap-4">
            <i className="pi-plus" />
            <span>pi-plus</span>
          </div>

          <div className="flex items-center gap-4">
            <i className="i-prime-plus" />
            <span>i-prime-plus</span>
          </div>

          <div className="flex items-center gap-4">
            <i className="pi-plus pi-fw" />
            <span>pi-plus pi-fw </span>
          </div>

          <div className="flex items-center gap-4">
            <i className="pi-spinner pi-spin" />
            <span>pi-spinner pi-spin </span>
          </div>
        </div>
      </section>
    </div>
  );
}
