import React from 'react'

import Card from '../components/Card'
import Button from '../components/Button'
import Backdrop from '../components/Backdrop'
import TextInput from '../components/TextInput'

export default class Result extends React.Component {
  state = {
    labels: {},
  }

  handleChange = (e, index) => {
    const { labels } = this.state

    const newLabels = {}
    newLabels[index] = e.target.value

    this.setState({
      labels: {
        ...labels,
        ...newLabels,
      },
    })
  }

  render() {
    const { images } = this.props
    const { labels } = this.state
    return (
      <Card>
        <h1>
          <span role="img">📸</span> Backdrop
        </h1>
        <p>Because screenshots were meant to be lit</p>
        <Backdrop
          screenshots={images.map((image, index) => ({
            image,
            label: labels[index] || `Screen ${index + 1}`,
          }))}
        />
        <div className="textFields">
          {images.map((_, index) => (
            <TextInput
              label={`Screen ${index + 1} Text`}
              onChange={e => this.handleChange(e, index)}
            />
          ))}
        </div>
        <Button wide>Save this Beauty</Button>
      </Card>
    )
  }
}
