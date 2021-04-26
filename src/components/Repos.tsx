import React from "react";

const Repos = (props: {isLoaded:boolean, items: any[]}) => {

  if (props.isLoaded) {
    return <ul>
      {
        props.items?.map((item: any) => (
          <li key={item.url}>
            <a href={item.html_url}>{item.name}</a>
          </li>
        ))
      }
    </ul>
  } else {
    return <div></div>
  }
};

export default Repos;