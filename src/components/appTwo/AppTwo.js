import React from "react";
import "../../appTwo.css";

function AppTwo() {
  return (
    <div class="grid2">
      <div class="item2 app_img2">
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/appstore_dezigner.png"}
        />
      </div>
      <div class="item2">
        <h1 className="app1_title2">Dezigner</h1>
      </div>
      <div class="item2">
        <p className="content">
          Dezigner - Design Studio was created with SwiftUI. Create T-Shirt
          mockups by adding image or text.
        </p>
        <a
          href="https://apps.apple.com/us/app/dezigner-design-studio/id6627333203"
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

export default AppTwo;
