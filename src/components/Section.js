import React from 'react'

const Section = ({ children, classNames, title, subtitle }) => (
  <div className={`section ${classNames}`}>
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1 className="section__heading">{title}</h1>
          <h5 className="section__subHeading">{subtitle}</h5>
        </div>
      </div>
      {children}
    </div>
  </div>
)

export default Section
