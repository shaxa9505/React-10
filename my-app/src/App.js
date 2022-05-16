import React, { Component } from 'react'
import Posts from './Posts';

class App extends Component {
  

    state = {
      posts: [
        {id: 1, name: "JavaScript"},
        {id: 2, name: "React js"},
        {id: 3, name: "Vue js"}
      ]
    }


  render() {
    return (
      <div>
        <Posts post={this.state.posts}/>
      </div>
    )
  }
}

export default App