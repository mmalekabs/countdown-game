import '../../index.css'
import {Fragment, useRef, useState} from "react";
import ResultModal from "../ResultModal/ResultModal.component";

export default function TimerChallenge({title, targetTime}) {

    const dialog = useRef();
    const timer = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    const resetHandler = () => {
        setTimeRemaining(targetTime * 1000);
    }

    const startHandler = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    const stopHandler = () => {
        dialog.current.open();
        clearInterval(timer.current)
    }

    return (
        <Fragment>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={resetHandler}
            />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className={'challenge-time'}>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? stopHandler : startHandler}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </Fragment>
    )
}