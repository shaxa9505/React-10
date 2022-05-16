import React, { Component } from 'react';
import PostTitle from './PostTitle';

class Posts extends Component {

    btnClick = () => {
        console.log("Bir marta bosildi");
    }

    render(props) {
        return (
            <div>
                <PostTitle posts={this.props.post} click={this.btnClick}/>
            </div>
        )
    }
}

export default Posts