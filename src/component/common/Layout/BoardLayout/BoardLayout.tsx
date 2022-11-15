import React, { FC, PropsWithChildren } from "react";
import mainBackground from "../../../../assets/images/chalkboard2.jpg";

const BoardLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${mainBackground})`,
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};

export default BoardLayout;
