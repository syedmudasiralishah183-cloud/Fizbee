import React, { memo } from "react";
interface textprops {
  SecTextData: {
    heading?: string;
    description?: string;
  };
}
const SecText = ({ SecTextData }: textprops) => {
  return (
    <div>
      <h2 className="text-2xl max-lg:text-xl  font-bold text-dark_heading text-start hyphens-auto pb-3 max-lg:pb-1">
        {SecTextData.heading}
      </h2>
      <p className="text-lg max-lg:text-base hyphens-auto text-description">
        {SecTextData.description}
      </p>
    </div>
  );
};

export default memo(SecText);
