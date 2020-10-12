import React from 'react';
import Button from "./Button";

const CallToAction = props => {

  return (
    <section className="cta">
      <h1>Install the Chrome Extension</h1>
      <p>Install the Chrome extension on the Chrome Store or using GitHub</p>
      <Button label="Install the Chrome Extension" />
      <Button label="View the GitHub Code" />
    </section>
  )
};

export default CallToAction;
