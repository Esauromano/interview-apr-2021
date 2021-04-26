import React from "react";

const Repos = (props: {isLoaded:boolean, items: any[]}) => {

  if (props.isLoaded) {
    return <ul  className="Columna">
      {
        props.items?.map((item: any) => (
          <li key={item.url}>
            {item.html_url}
          </li>
        ))
      }
    </ul>
  } else {
    return <div></div>
  }
};

export default Repos;