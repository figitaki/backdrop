import React from 'react'
import './Button.css'

export default ({ onClick, children, wide }) => (
  <button
    className="btn"
    style={{ width: wide ? '100%' : 'auto' }}
    onClick={onClick}
  >
    {children}
  </button>
)
