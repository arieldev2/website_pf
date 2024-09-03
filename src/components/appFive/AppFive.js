import React from "react";
import "../../appOne.css";

function AppFive() {
  return (
    <div class="grid">
      <div class="item app_img1">
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/appstore_reality.png"}
        />
      </div>
      <div class="item">
        <h1 className="reality_title">Reality OBJ</h1>
      </div>
      <div class="item">
        <p className="content">
          Reality OBJ - USDZ Converter was created with Swift UIKit. You can
          convert obj files to usdz and update materials.
        </p>
        <a
          href="https://apps.apple.com/us/app/reality-obj-usdz-converter/id1603967912"
          style={{ marginTop: "15px" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/appstore.png"}
            width={100}
          />
        </a>
      </div>
    </div>
  );
}

export default AppFive;
