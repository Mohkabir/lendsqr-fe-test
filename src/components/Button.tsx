import React from "react";
import { FunctionBody } from "typescript";

interface BtnProps {
  title: string;
  action(): any;
  primary?: boolean;
}

const Btn = (props: BtnProps) => {
  const { title, action, primary } = props;
  return (
    <button
      type="submit"
      onClick={action}
      className={`${primary ? "primary_btn" : "outline_btn"} btn`}
    >
      {title}
    </button>
  );
};

export default Btn;