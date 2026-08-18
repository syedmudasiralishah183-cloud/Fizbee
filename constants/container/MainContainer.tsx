import React, { memo, ReactNode } from "react";
const MainContainer = ({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: any;
  style?: any;
}) => {
  return (
    <div style={style} className="bg-bg_color  ">
      <div className={`container mx-auto 2xl:px-12 lg:px-8 px-5  ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default memo(MainContainer);
