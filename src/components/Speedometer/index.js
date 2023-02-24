// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : {speed: 200},
    )
  }

  brake = () => {
    this.setState(prevState =>
      prevState.speed > 0 ? {speed: prevState.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="limit">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            onClick={this.accelerate}
            className="accelerate"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.brake} className="brake" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
