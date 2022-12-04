import React, { FC, PropsWithChildren } from "react";
import mainBackground from "../../../assets/images/chalkboard2.jpg";

const BoardLayout: FC<PropsWithChildren<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <div
      style={{
        padding: "30px 0 100px 0",
        backgroundImage: `url(${mainBackground})`,
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};

export default BoardLayout;
