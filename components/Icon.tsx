type IconName = "document" | "record" | "search" | "summary" | "gap" | "queue" | "scale" | "shield" | "list" | "check";

const paths: Record<IconName, string> = {
  document: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  record: "M5 4h14v16H5zM9 4v16M12 9h4M12 13h4",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM16.5 16.5L21 21",
  summary: "M5 6h14M5 11h14M5 16h9",
  gap: "M12 3l9 16H3zM12 10v4M12 17v.5",
  queue: "M5 6h10M5 12h14M5 18h7M18 4v4M16 6h4",
  scale: "M12 4v16M6 20h12M5 8h14M5 8l-2 6a3 3 0 0 0 4 0zM19 8l-2 6a3 3 0 0 0 4 0z",
  shield: "M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z",
  list: "M9 6h11M9 12h11M9 18h11M4 6h.5M4 12h.5M4 18h.5",
  check: "M5 12.5l4.5 4.5L19 7.5",
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}

export type { IconName };
