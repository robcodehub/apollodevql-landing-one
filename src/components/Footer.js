import React from 'react';

const Footer =  ({ siteTitle }) => {

  return (
    <footer className="footer">
      <div className="footer-belt">
        <div className="company-sign">
        &copy; 2020 {siteTitle}
      </div>
        <div className="social-media">

          <a href="https://github.com/oslabs-beta/ApolloDevQL" target="_blank" rel="noreferrer"><div className="social-github">GitHub</div></a>
          <a href="https://www.linkedin.com"><div className="social-linkedin">LinkedIn</div></a>

        </div>
      </div>
    </footer>
  )
};

export default Footer;
