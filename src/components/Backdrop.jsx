import React from 'react'

const WIDTH = 665

// screenshot is an object with image and label
let drawScreenshot = (ctx, screenshot, x) => {
  let ratio = 175 / screenshot.image.width
  let y = 45

  ctx.shadowColor = 'black'
  ctx.shadowBlur = 6
  ctx.drawImage(
    screenshot.image,
    x,
    y + (400 - screenshot.image.height * ratio),
    screenshot.image.width * ratio,
    screenshot.image.height * ratio
  )

  ctx.fillStyle = 'white'
  ctx.shadowBlur = 0
  ctx.font = '16px Graphik-Medium'
  ctx.textAlign = 'center'
  ctx.fillText(screenshot.label, x + (screenshot.image.width * ratio) / 2, 475)
}

export default class Backdrop extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')

    // Setup canvas and fill background
    ctx.scale(2, 2)

    this.update()
  }

  componentDidUpdate() {
    this.update()
  }

  update() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const { screenshots } = this.props

    ctx.fillStyle = '#1945EA'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Layout the screenshots
    if (screenshots.length === 1) {
      drawScreenshot(ctx, screenshots[0], WIDTH / 2 - 175 / 2)
    } else if (screenshots.length === 2) {
      drawScreenshot(ctx, screenshots[0], WIDTH / 3 - 175 / 2)
      drawScreenshot(ctx, screenshots[1], (WIDTH / 3) * 2 - 175 / 2)
    } else {
      drawScreenshot(ctx, screenshots[0], WIDTH / 5 - 175 / 2)
      drawScreenshot(ctx, screenshots[1], (WIDTH / 5) * 2.5 - 175 / 2)
      drawScreenshot(ctx, screenshots[2], (WIDTH / 5) * 4 - 175 / 2)
    }

    const output = this.refs.output
    output.src = canvas.toDataURL('image/png')
  }

  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          width="1330"
          height="1024"
          style={{ display: 'none' }}
        />
        <img ref="output" width="600" height="460" />
      </div>
    )
  }
}
