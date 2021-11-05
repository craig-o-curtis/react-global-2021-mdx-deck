import React from "react";

const AnchorLink = ({ href, title }) => {
  return (
    <a href={href} target="_blank" className="text-white">
      {title}
    </a>
  );
};

export default AnchorLink;
