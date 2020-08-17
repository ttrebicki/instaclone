import React, {Component} from 'react';
import './userWidget.css';

class UserWidget extends Component {

  constructor(props) {

    super(props);

    this.state = {
      username: "ttrebicki",
      profilePhotoSrc: "/img/gradient.jpg",
      userFriends: 127
    }

}
  render() {

    return (

      <div className="userWidget">
        <div className="userBasics">
          <img className="profilePhoto" src={this.state.profilePhotoSrc} alt="Profile" />
          <h4 className="currentUsername">{this.state.username}</h4>
        </div>
        <div className="userInfo">You have <b>{this.state.userFriends}</b> friends.</div>
      </div>

    )

  }

}

export default UserWidget;
