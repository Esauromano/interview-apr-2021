import React from "react";
import loadData from "../services/Github.service";

const MyButton = ( props:
  {
    username: string,
    isLoaded: boolean,
    setIsLoaded: Function,
    setItems: Function,
    setHasError: Function,
    setUserImage: Function,
    setError: Function,
    hasError: boolean,
    setUsername: Function
  }
) => {
  
  if (!props.isLoaded && !props.hasError) {
    return <button onClick={e => loadData(
      props.setIsLoaded,
      props.setItems, 
      props.setUserImage,
      props.setHasError,
      props.setError,
      props.username
    )}>Load data</button>;
  } else {
    return <button onClick={e => { props.setIsLoaded(false); props.setHasError(false); props.setUsername("")}}>Reset</button>;
  }
};



export default MyButton;