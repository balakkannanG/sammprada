import type { HTMLAttributes } from "react";

type SiteContainerProps = HTMLAttributes<HTMLDivElement>;

export default function SiteContainer({ className = "", ...props }: SiteContainerProps) {
  return (
    <div
      className={`mx-auto w-[calc(100%_-_38px)] max-w-[1240px] min-[621px]:w-[min(calc(100%_-_42px),760px)] min-[901px]:w-[min(calc(100%_-_56px),1050px)] min-[1201px]:w-[min(1240px,calc(100%_-_88px))] ${className}`}
      {...props}
    />
  );
}
