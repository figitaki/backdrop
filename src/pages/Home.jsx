import React from 'react'

import Card from '../components/Card'
import Button from '../components/Button'

export default class Home extends React.Component {
  handleChange = e => {
    if (!e.target.files.length) return
    Promise.all(
      Array.from(e.target.files).map(image => createImageBitmap(image))
    ).then(images => {
      this.props.onUpload && this.props.onUpload(images.slice(0, 3))
    })
  }

  openPicker = () => {
    this.fileInput.click()
    this.props.onOpenPicker && this.props.onOpenPicker()
  }

  render() {
    return (
      <Card>
        <h1>
          <span role="img">📸</span> Backdrop
        </h1>
        <p>Because screenshots were meant to be lit</p>
        <Button onClick={this.openPicker}>Upload Your Screenshots</Button>
        <p style={{ fontSize: '12px' }}>
          We recommend 2 images for before & after shots <br />
          or 3 for device size comparisons.
        </p>
        <input
          ref={input => (this.fileInput = input)}
          onChange={this.handleChange}
          style={{ display: 'none', marginTop: '8px' }}
          accept="image/png"
          multiple
          type="file"
        />
      </Card>
    )
  }
}
