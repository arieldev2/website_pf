import React from "react";
import "../../appOne.css";

function AppThree() {
  return (
    <div class="grid">
      <div class="item remove-bg">
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/appstore_remove.png"}
        />
      </div>
      <div class="item">
        <h1 className="remove-title">Remove AI</h1>
      </div>
      <div class="item">
        <p className="content">
          Remove AI - Remove Objects was created with Swift UIKit. Removes
          objects of images with AI by masking the area.
        </p>
        <a
          href="https://apps.apple.com/us/app/remove-ai-remove-objects/id6654893020"
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

export default AppThree;
