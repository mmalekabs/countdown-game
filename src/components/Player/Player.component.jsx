import {useState} from "react";

export default function PlayerComponent() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const changeHandler = (event) => {
        setSubmitted(false);
        setEnteredPlayerName(event.target.value);
    }

    const clickHandler = () =>{
        setSubmitted(true);
    }

  return (
    <section id="player">
      <h2>Welcome {submitted? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={changeHandler} value={enteredPlayerName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
