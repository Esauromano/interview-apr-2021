const loadData = (setIsLoaded: Function, setItems: Function, setUserImage: Function, setHasError: Function, setError: Function, username:string) => {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(result)
        console.log("🔥 ~ file: Github.service.ts ~ line 13 ~ loadData ~ result === []", result === [])
        console.log("🔥 ~ file: Github.service.ts ~ line 13 ~ loadData ~ result !== []", result !== [])
        if (result !== [] && result[0]) {
          setUserImage(result[0]?.owner.avatar_url)
        }
        else {
          console.log('result', "Result is empty")
          setIsLoaded(false);
          setHasError(true)
        }
      },
      (error) => {
        
        console.log('error', error)
        setIsLoaded(false);
        setError(error);
        setHasError(true)
      }
    )
}
export default loadData