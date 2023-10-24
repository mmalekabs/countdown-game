import '../../index.css'
import {useRef, useState} from "react";

export default function TimerChallenge({title, targetTime}) {

    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    const timer = useRef();
    const startHandler = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    const stopHandler = () => {
        clearTimeout(timer.current)
    }

    return <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You've lost</p>}
        <p className={'challenge-time'}>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? stopHandler : startHandler}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : ''}>
            {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
}