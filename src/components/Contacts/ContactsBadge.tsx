import React from "react";
import cn from "classnames";
import Link from "next/link";

type ContactProps = {
  className?: React.ReactNode;
  href: string;
  title: string;
  icon?: React.ReactElement<SVGElement>;
};

export function Contact({ href, icon, className, title }: ContactProps) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "flex items-center justify-center gap-2 transition duration-300",
          `rounded-lg p-[6px] px-3 font-sans md:px-4 sm:p-2.5 sm:px-[13px]`,
          ` no-underline`,
          className,
        )}
        rel="noopener noreferrer"
        target="_blank"
      >
        {icon}
        <span className="sm:hidden">{title}</span>
      </a>
    </Link>
  );
}
