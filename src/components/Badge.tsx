export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
      {children}
    </span>
  );
}
