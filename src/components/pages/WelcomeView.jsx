import React from "react";
import WelcomeOptionsContainer from "../containers/WelcomeOptionsContainer";
import WelcomeTitle from "../text/WelcomeTitle";
import WelcomeHeader from "../header/WelcomeHeader";

function WelcomeView() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <WelcomeHeader />
      <WelcomeTitle />
      <WelcomeOptionsContainer />
    </div>
  );
}

export default WelcomeView;
