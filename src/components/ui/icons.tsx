export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={diagonal ? "rotate-[-45deg]" : ""}
    >
      <path
        d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Mark({ kind = "spark" }: { kind?: "spark" | "plus" | "heart" }) {
  if (kind === "plus") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 5v14M5 12h14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "heart") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M20.8 8.6c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
