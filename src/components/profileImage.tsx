import React from "react";
import logo from '../logo.svg';

const ProfileImage = (props: {isLoaded:boolean, image:string, hasError:boolean}) => {
  if (props.isLoaded) {
    return <img src={props.image} className="App-logo" alt="logo" />
  } else if(!props.hasError){
    return <img src={logo} className="App-logo" alt="logo" />
  } else {
    return <div />
  }
};

export default ProfileImage;