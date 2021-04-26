import React from "react";

const Conditionaldiv = (props: {isLoaded:boolean, username:string, setUsername: Function, hasError:boolean}) => {
  if (!props.isLoaded && !props.hasError) {
    return <div className="conditionalDiv">
      <p>
        Enter a GitHub username and push the button to load it's data
      </p>
      <label>
        GitHub Username: {props.username}
      </label>
      <input type="text" value={props.username} onChange={e => props.setUsername(e.target.value)}></input>
    </div>
  } else {
    return <div></div>
  }
};

export default Conditionaldiv;