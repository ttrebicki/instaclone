import React, {Component} from 'react';
import './post.css';

class Post extends Component {

  constructor(props) {

    super(props);

    this.state = {
      likesNumber: 14,
      postLiked: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);

  }

    handleChange(event) {

    this.setState (state => (

      {
        likesNumber: state.likesNumber + 1,
        likedButtonCaption: "Unlike",
        postLiked: true
      }

    ))

  }

  handleChangeTwo(event) {

  this.setState (state => (

    {
      likesNumber: state.likesNumber - 1,
      postLiked: false
    }

  ))

}

  render() {

    let likeButton;

    if (this.state.postLiked === false) {
      likeButton = <button className="likeButton" onClick={this.handleChange} type="submit"><img className="likeIcon" src="/img/likebutton.png" alt="like"/></button>
    }
    else {
      likeButton = <button className="likeButton unlikeButton" onClick={this.handleChangeTwo} type="submit"><img className="likeIcon" src="/img/likebutton.png" alt="unlike"/></button>
    }

    return (

      <div className="post">
      <h4 className="postUsername">{this.props.username}</h4>
      <img className="postImage" src={this.props.imageSrc} alt="postImage" />
      <div className="postLikesSection">{likeButton}
        <span className="postLikes">{this.state.likesNumber} likes</span>

      </div>
      <div className="postInfo">
      <span className="postDescr">{this.props.postDescr}</span>
      </div>
      </div>

    )

  }

}

export default Post;
