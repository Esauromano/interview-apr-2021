import React, { useState } from 'react';
import './App.css';
import Conditionaldiv from './components/ConditionalDiv';
import MyError from './components/Error';
import MyButton from './components/MyButton';
import ProfileImage from './components/profileImage';
import Repos from './components/Repos';

function App() {
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [userImage, setUserImage] = useState("")

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  
  } else {
  return (
    <div className="App">
      <header className="Columna">
        <ProfileImage isLoaded={ isLoaded } image={ userImage } hasError={hasError}/>
        <MyError hasError={hasError} error={ error }/>
        <Conditionaldiv isLoaded={ isLoaded } username={ username } setUsername={ setUsername } hasError={hasError}/>
        <MyButton
          username={username}
          setUsername={setUsername}
          setItems={setItems}
          setHasError={setHasError}
          setUserImage={setUserImage}
          setError={setError}
          setIsLoaded={setIsLoaded}
          isLoaded={isLoaded}
          hasError={hasError}
        />
        <Repos isLoaded={ isLoaded } items={ items } />
      </header>
      
    </div>
  );
  }
  
}

export default App;
