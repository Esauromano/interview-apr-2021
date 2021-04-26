import React from "react";

const MyError = (props: {error:boolean}) => {
  if (props.error) {
    return <img src={'https://cdni.iconscout.com/illustration/premium/thumb/concept-of-error-404-and-robot-not-working-2112236-1779236.png'} className="App-logo" alt="logo" />;
  } else {
    return <div />;
  }
};

export default MyError;