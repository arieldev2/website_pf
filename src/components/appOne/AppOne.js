import React from "react";
import "../../appOne.css";

function AppOne() {
  return (
    <div class="grid">
      <div class="item app_img1">
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/appstore_svcam.png"}
        />
      </div>
      <div class="item">
        <h1 className="app1_title">SV Camera</h1>
      </div>
      <div class="item">
        <p className="content">
          SV Camera was created with UIKit. A camera app to take photos without
          having to edit, since it has ready-to-use filters.
        </p>
        <a
          href="https://apps.apple.com/us/app/sv-camera-vintage-camera/id6502562209"
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

export default AppOne;
