import React from "react";
import "../../appTwo.css";

function AppFour() {
  return (
    <div class="grid2">
      <div class="item2 wise_bg">
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/appstore_wise.png"}
        />
      </div>
      <div class="item2">
        <h1 className="wise_title">Wisecarta</h1>
      </div>
      <div class="item2">
        <p className="content">
          Wisecarta was created with SwiftUI. Create information cards with
          elegant and minimalist design.
        </p>
        <a
          href="https://apps.apple.com/us/app/wisecarta/id6667101206"
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

export default AppFour;
