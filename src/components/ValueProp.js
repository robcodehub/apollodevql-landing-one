import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>ApolloDevQL</h1>
          <p className="main-subtitle">The Apollo GraphQL Dev tool you've been looking for</p>
          <a href="https://github.com/oslabs-beta/ApolloDevQL" target="_blank" rel="noreferrer"><Button label="Install the Extension" /></a>
          <h3> OR </h3>
          <a href="https://github.com/oslabs-beta/ApolloDevQL" target="_blank" rel="noreferrer"> <Button label="View on GitHub" /></a>
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;
