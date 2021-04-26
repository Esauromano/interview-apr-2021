import React from "react";

const MyError = (props: {error: any, hasError: boolean}) => {
  if (props.hasError) {
    return <div>
      <img
        src={'https://cdni.iconscout.com/illustration/premium/thumb/concept-of-error-404-and-robot-not-working-2112236-1779236.png'}
        className="App-logo"
        alt="logo"
      />
      <p>The user does not exist or does not have repositories yet </p>
    </div>
    
  } else {
    return <div/>;
  }
};

export default MyError;