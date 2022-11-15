import React, { FC } from "react";
import mainBackground from "../../../../assets/images/chalkboard2.jpg";
import { IChildren } from "../../../../types/main";

const BoardLayout: FC<IChildren> = ({ children }) => {
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
