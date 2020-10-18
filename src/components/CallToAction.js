import React from 'react';
import Button from "./Button";

const CallToAction = props => {

  return (
    <section className="cta">
      <h1>Install the Chrome Extension</h1>
      <p>Install the Chrome extension on the Chrome Store or using GitHub</p>
      <a href="https://github.com/oslabs-beta/ApolloDevQL" target="_blank" rel="noreferrer"> <Button aria-label="Chrome Extension" label="Install the Chrome Extension" /></a>
      <a href="https://github.com/oslabs-beta/ApolloDevQL" target="_blank" rel="noreferrer"><Button aria-label="GitHub Code" label="View the GitHub Code" /></a>
    </section>
  )
};

export default CallToAction;
