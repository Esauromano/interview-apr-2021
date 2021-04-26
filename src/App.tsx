import React, { useState } from 'react';
import './App.css';
import Conditionaldiv from './ConditionalDiv';
import MyError from './Error';
import MyButton from './MyButton';
import ProfileImage from './profileImage';
import Repos from './Repos';

function App() {
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [userImage, setUserImage] = useState("")

  const loadData = (name: string) => {
    console.log(username)
    setUsername(name)
    fetch(`https://api.github.com/users/${name}/repos`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
          console.log(isLoaded);
          if (result !== []) {
            setUserImage(result[0]?.owner.avatar_url)
          }
          else if((result == [])){
            setHasError(true)
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
          setIsLoaded(false);
          setError(error);
          setHasError(true)
        }
      )
  }
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  
  } else {
  return (
    <div className="App">
      <header className="Columna">
        <ProfileImage isLoaded={ isLoaded } image={ userImage }/>
        <Conditionaldiv isLoaded={ isLoaded } username={ username } setUsername={ setUsername }  />
        <MyButton username={username} loadData={loadData} setLoadData={setIsLoaded} isLoaded={isLoaded} />
        <Repos isLoaded={ isLoaded } items={ items } />
        <MyError error={ hasError }/>
      </header>
      
    </div>
  );
  }
  
}

export default App;
