import * as React from "react";

interface NavLinkProps {
  link: string;
  label: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <li className="">
      <a href={props.link}>{props.label}</a>
    </li>
  );
};

export default NavLink;
