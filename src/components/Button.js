import React from 'react'

const Button = ({ children, classNames }) => (
  <button className={`button ${classNames}`}>{children}</button>
)

export default Button
