import React, { Component } from 'react'
import './App.css'

import Home from './pages/Home'
import Result from './pages/Result'

const gifUrls = {
  fire: 'https://media.giphy.com/media/lQzCIfrVOrpC0/giphy.gif',
  uploading: 'https://media.giphy.com/media/RHEqKwRZDwFKE/giphy.gif',
  magic: 'https://media.giphy.com/media/l0ExhcMymdL6TrZ84/giphy.gif',
}

class App extends Component {
  state = {
    images: [],
    pickerOpen: false,
  }

  render() {
    const { images, pickerOpen } = this.state
    const gif = images.length
      ? gifUrls.magic
      : pickerOpen
      ? gifUrls.uploading
      : gifUrls.fire

    return (
      <div className="App">
        {images.length ? (
          <Result images={images} />
        ) : (
          <Home
            onOpenPicker={() => this.setState({ pickerOpen: true })}
            onUpload={images => this.setState({ images })}
          />
        )}
        <img
          src={gif} //"https://media.giphy.com/media/4TMqcN59kg3Yc/giphy.gif"
          className="backgroundGif"
        />
      </div>
    )
  }
}

export default App
