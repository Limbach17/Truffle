import React from "react";
import IconGallery from "../IconGallery";
import SupportNav from "../SupportNav";
import "./style.css";

function InnerWhite() {
  return (
    <div id="inner-white-bar">
        <IconGallery id="icon-gallery" />
        <SupportNav id="support-nav" />
    </div>
  );
}

export default InnerWhite;
