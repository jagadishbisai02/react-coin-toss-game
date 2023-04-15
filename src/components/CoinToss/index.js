// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossResultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headCounts: 0,
    tailCounts: 0,
  }

  onTossCoin = () => {
    const {headCounts, tailCounts} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCounts = headCounts
    let latestTailCounts = tailCounts

    if (toss === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadCounts += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailCounts += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headCounts: latestHeadCounts,
      tailCounts: latestTailCounts,
    })
  }

  render() {
    const {tossResultImage, headCounts, tailCounts} = this.state
    const totalCounts = headCounts + tailCounts
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="toss-btn" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="counts">Total: {totalCounts}</p>
            <p className="counts">Heads: {headCounts}</p>
            <p className="counts">Tails: {tailCounts}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
