interface StoreLinkButtonProps {
  href: string;
  label: string;
  imageSrc: string;
  variant?: "app-store" | "play-store";
}

export function StoreLinkButton({
  href,
  label,
  imageSrc,
  variant = "app-store",
}: StoreLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex shrink-0 transition-transform duration-200 hover:scale-105"
    >
      <img
        src={imageSrc}
        alt=""
        className={
          variant === "play-store"
            ? "h-3.5 w-3.5 object-contain"
            : "h-4 w-4 object-contain"
        }
      />
    </a>
  );
}

export const APP_STORE_ICON = "/icons/app-store.svg";
export const GOOGLE_PLAY_ICON = "/icons/google-play.svg";
