import React from "react";
import cn from "classnames";

type ContactProps = {
  className?: React.ReactNode;
  href: string;
  title: string;
  icon: React.ReactElement<SVGElement>;
};

export function Contact({ href, icon, className, title }: ContactProps) {
  return (
    <a
      className={cn(
        "flex items-center justify-center gap-2 transition duration-300",
        `rounded-lg p-[6px] px-3 md:px-4 sm:p-2.5 sm:px-[13px] font-sans`,
        ` no-underline`,
        className,
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon}
      <span className="sm:hidden  pt-[3px]">{title}</span>
    </a>
  );
}
