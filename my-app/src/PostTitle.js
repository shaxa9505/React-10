import React, { Component } from 'react'

class PostTitle extends Component {
    render(props) {
        return (
            <div>
                {this.props.posts.map((item, index) => (
                    <h1 key={index} >{item.name}</h1>
                ))}
                <p onClick={this.props.click}>Click</p>
            </div>
        )
    }
}

export default PostTitle