import { Component } from 'react' 
import MoodPoints from '../mood-points/MoodPoints.jsx'
import MoodNote from '../mood-note/MoodNote.jsx'
// import placeHolderNotes from './placeHolderNotes.js'

export default class MoodTracker extends Component {
  // create state and set initial state the boomer way
  // constructor() {
  //   // invoke super first!
  //   // gets functionality from Component
  //   super()
  //   this.state = {
  //     points: 99
  //   }
  //   console.log(this)
  //   this.handleIncreaseMood = this.handleIncreaseMood.bind(this)
  // }

  // class field declaration method of defining state
  state = {
    points: 11,
    noteInput: '',
    noteData: []
  }

  // event handlers
  handleIncreaseMood = () => {
    this.setState((whatever) => {
      return {
        points: whatever.points + 1
      }
    }, () => console.log(this.state))
    // this code down here runs first
    // console.log(this.state)
  }

  handleDecreaseMood = () => {
    this.setState((prevState) => {
      return {
        points: prevState.points - 1
      }
    }, () => console.log(this.state))
  }

  handleInputChange = (e) => {
    this.setState({
      noteInput: e.target.value
    }, () => console.log(this.state))
    // down here still runs first
  }
  // string concatenation
  // 'string 1' + 'string 2'
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('hello from submit function')
    this.setState((prevState) => {
      // new data from user
      const newNoteData = {
        note: prevState.noteInput,
        date: new Date().toLocaleDateString(),
        points: prevState.points
      }

      return {
        // will throw an error -- DO NOT WANT
        // noteData: prevState.noteData.push(newNoteData)
        // concatenation to make a new array and set state
        // noteData: prevState.noteData.concat([newNoteData])
        // sick spread operator!
        noteData: [...prevState.noteData, newNoteData]
      }
    }, () => this.setState({ noteInput: '' }))
  }

  render() {
    const noteComponents = this.state.noteData.map((placeHolderNote, index) => {
      // console.log('index', index, 'has this data in it:', placeHolderNote)
      return (
        <MoodNote 
          key={`${index}`}
          points={placeHolderNote.points}
          date={placeHolderNote.date}
          note={placeHolderNote.note}
        />
      )
    })
    
    return (
      <div>
        <MoodPoints points={this.state.points} />

        <button onClick={this.handleIncreaseMood}>🎸</button>

        <button onClick={this.handleDecreaseMood}>☠️</button>

        <h3>My Notes:</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='note-input'>New Note:</label>

          {/* test input from user */}
          <input 
            id='note-input'
            type='text'
            placeholder='how ya doin?'
            onChange={this.handleInputChange}
            value={this.state.noteInput}
          />

          {/* button that submits form */}
          <input
            type='submit'
            value='Save Note' 
          />
        </form>

        {noteComponents}
      </div>
    )
  }
}