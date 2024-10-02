import React from "react";
import "../../appTwo.css";

function AppFour() {
  return (
    <div class="grid2">
      <div class="item2 wise_bg">
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/bass.png"}
        />
      </div>
      <div class="item2">
        <h1 className="bass_title">Bass EQ</h1>
      </div>
      <div class="item2">
        <p className="content">
          Bass Booster: EQ was created with SwiftUI. Enhances low frequencies,
          giving your favorite tracks a deep, resonant boost.
        </p>
        <a
          href="https://apps.apple.com/us/app/bass-booster-eq/id6711341566"
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
