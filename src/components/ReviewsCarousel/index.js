import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeTab: 0}

  renderCurrentTab = reviews => {
    const {imgUrl, username, companyName, description} = reviews

    return (
      <div className="ActiveTab">
        <img src={imgUrl} alt={username} className="user-icon" />
        <p className="name">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  onClickRight = () => {
    const {activeTab} = this.state
    const {reviewsList} = this.props

    if (activeTab < reviewsList.length - 1) {
      this.setState(prevState => ({activeTab: prevState.activeTab + 1}))
    }
  }

  onClickLeft = () => {
    const {activeTab} = this.state

    if (activeTab > 0) {
      this.setState(prevState => ({activeTab: prevState.activeTab - 1}))
    }
  }

  render() {
    const {activeTab} = this.state
    const {reviewsList} = this.props
    const currentTabDetails = reviewsList[activeTab]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="main-container">
          <button
            className="button"
            testid="leftArrow"
            onClick={this.onClickLeft}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          {this.renderCurrentTab(currentTabDetails)}
          <button
            className="button"
            testid="rightArrow"
            onClick={this.onClickRight}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
