import React, { Component } from 'react';

class App extends Component {
  state = {
    inputValue:'',
    todos: [],
  }

  onType = (event) => {
    this.setState({
      inputValue: event.target.value,
    })

  }

saveToList = () => {
  this.setState({
    todos: this.state.inputValue,
  })
}



  render () {
    return (
      <div>
      <input
        type= 'text'
        onChange={this.onType}
        value={this.state.inputValue}
        />
      <button
        onClick={this.saveToList}
        > Save to List
      </button>
      <TodoList items={this.state.todos} />
      </div>
    )
  }
}

cosnt Button = (props) => {
  return (
    <button onClick={props.onClick}
  )
}

const TodoList = (props) => {
  const listItems = props.items.map((item)=> {
    return <li> {item}</li>
  } )

  return (
    <al>
      {listItems}
    </al>
  )
}

export default App;
