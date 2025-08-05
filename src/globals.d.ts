// globals.d.ts or types/window.d.ts
export {};

declare global {
  interface Window {
    navigateToSection?: (index: number) => void;
  }
}
