import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>ApolloDevQL</h1>
          <p className="main-subtitle">The Apollo GraphQL Dev tool you've been looking for</p>
          <Button label="Install the Extension" />
          <h3> OR </h3>
          <Button label="View on GitHub" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;
