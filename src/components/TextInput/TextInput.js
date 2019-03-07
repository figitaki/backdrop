import React from 'react'
import './TextInput.css'

export default ({ onChange, label }) => (
  <div className="textInput-wrapper">
    <input
      type="text"
      onChange={onChange}
      className="textInput"
      placeholder="Label"
    />
    <p>{label}</p>
  </div>
)
