import * as React from "react";

interface NavLinkProps {
  link: string;
  label: string;
  isActive?: boolean;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <li className={`group text-lg ${props.isActive ? "is-active" : ""}`}>
      <a
        className="group-hover:!text-[#26a188] group-[.is-active]:text-[#26a188] group-[.is-active]:font-bold transition-colors"
        href={props.link}
      >
        {props.label}
      </a>
      <span className="w-0 flex h-1 bg-[#26a188] group-[.is-active]:w-3 group-hover:!w-6 transition-all"></span>
    </li>
  );
};
