import React from "react";
import logo from './logo.svg';

const ProfileImage = (props: {isLoaded:boolean, image:string}) => {
  if (props.isLoaded) {
    return <img src={props.image} className="App-logo" alt="logo" />
  } else {
    return <img src={logo} className="App-logo" alt="logo" />
  }
};

export default ProfileImage;