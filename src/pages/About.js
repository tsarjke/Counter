import React from "react";
import { Detect } from "../utils/Detect";

const About = () => {
  return (
    <div>
      <h3>
        Hello!
        <b> {`${Detect.browser} ${Detect.version} - ${Detect.OS}`}</b>
      </h3>
    </div>
  );
};

export default About;
