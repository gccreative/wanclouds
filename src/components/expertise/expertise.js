import React from 'react'
import posed from 'react-pose'

import './expertise.css'

const Box = posed.div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.3
  }
})

class Expertise extends React.Component {

  state = {
    hovered: false
  }

  hoverIn = () => {
    this.setState({ hovered: true })
  }

  hoverOut = () => {
    this.setState({ hovered: false })
  }

  render() {
      return (
        <div>
          <Box pose={this.state.hovered ? "hovered" : "idle"} 
            className={this.props.style} onMouseEnter={() => this.hoverIn()}
            onMouseLeave={() => this.hoverOut()}>
            {this.props.children}
          </Box>
        </div>
    )
  }
}

export default Expertise
