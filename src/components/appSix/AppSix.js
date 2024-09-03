import React from "react";
import "../../appTwo.css";

function AppSix() {
  return (
    <div class="grid2">
      <div class="item2 wise_bg">
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/appstore_usdz.png"}
        />
      </div>
      <div class="item2">
        <h1 className="usdz_title">USDZ Viewer</h1>
      </div>
      <div class="item2">
        <p className="content">
          USDZ 3D Viewer was created with SwiftUI. You can view your 3D USDZ
          models, change the background and lighting with HDRI.
        </p>
        <a
          href="https://apps.apple.com/us/app/usdz-3d-viewer/id1587642013#?platform=iphone"
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

export default AppSix;
