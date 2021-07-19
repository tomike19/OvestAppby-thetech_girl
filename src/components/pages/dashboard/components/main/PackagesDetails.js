import React from "react";
import "./packagedetails.css";
function PackageDetails({ image, title, body, footer, footerIcon, style }) {
  return (
    <div className="packages" style={style}>
      <div className="package-left">
        <h5 className="package-title" style={style}>
          {title}
        </h5>
        <p className="package-body">{body}</p>
        <p className="package-foot">
          <span>{footer}</span>
          <img src={footerIcon} alt="" srcSet="" />
          <img src={footerIcon} alt="" srcSet="" />
        </p>
      </div>
      <div className="package-right">
        <img src={image} alt="" srcSet="" />
      </div>
    </div>
  );
}

export default PackageDetails;
