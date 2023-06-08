import * as React from "react";

interface ButtonProps {
  label: string;
  action?: () => void;
}
// border #26a088
// border-top #26a188
// border-bottom #076049
// gradient-top #1f8f78
// gradient-bot #085943
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`group flex w-fit rounded-md p-[1px] bg-gradient-to-br from-[#26a188] to-[#076049] shadow-xl hover:shadow-[#04aa6d3d] transition-all shadow-[#04aa6d0d]`}
      onClick={props.action}
    >
      <span className="flex px-8 py-2 rounded-md text-lg font-bold bg-gradient-to-b from-[#1f8f78] to-[#085943]">
        {props.label}
      </span>
    </button>
  );
};
