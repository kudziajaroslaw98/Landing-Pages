import { NavLink } from "./nav-link";
import * as React from "react";

export const Nav = () => {
  return (
    <nav>
      <ul className="space-x-12 hidden md:flex">
        <NavLink link={"#"} label={"Home"} />
        <NavLink link={"#"} label={"Functions"} />
        <NavLink link={"#"} label={"Contact"} />
      </ul>
    </nav>
  );
};
