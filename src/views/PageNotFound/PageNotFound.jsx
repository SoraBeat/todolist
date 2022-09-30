import React from "react";
import "./PageNotFound.scss";

import AnimatedFrame from "../../components/AnimatedFrame/AnimatedFrame";
import Image from "../../assets/images/PageNotFound.png";

const PageNotFound = () => {
  return (
    <AnimatedFrame>
      <div className="container-notfound">
        <img className="notfound-img" src={Image} alt="page not found" />
      </div>
    </AnimatedFrame>
  );
};

export default PageNotFound;
