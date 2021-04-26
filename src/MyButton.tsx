import React from "react";

const MyButton = (props: {username:string, loadData: Function, setLoadData: Function, isLoaded:boolean}) => {
  if (!props.isLoaded) {
    return <button  onClick={e => props.loadData(props.username)}>Load data</button>;
  } else {
    return <button  onClick={e => props.setLoadData(false)}>Reset</button>;
  }
};

export default MyButton;