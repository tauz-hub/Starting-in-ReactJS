
import { AppRoutes } from "./routes";

/* 
import './App.css'
 */
/* function App() {

  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]) 

  function createTweet(){
  
    setTweets([...tweets, "Tweet 5"])
  }

  return (
    <div>
     {tweets.map(tweet=>{
      return <Tweet text={tweet} />
     })}

      <button 
      onClick={createTweet}
      style={{
        background:"red",
        border: 0,
        padding: "6px 12px",


      }}
      
      >Novo Tweet</button>
    </div>
  );
} */

function App(){
  return (
    <AppRoutes />
  )
}

export default App;
