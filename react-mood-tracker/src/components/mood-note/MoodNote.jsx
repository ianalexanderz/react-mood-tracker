import { Component } from 'react'

export default class MoodNote extends Component {
  render() {
    return (
      <div>
        <p>My Mood was {this.props.points} on {this.props.date}</p>

        <p>My thoughts: {this.props.note}</p>
      </div>
    )
  }
}