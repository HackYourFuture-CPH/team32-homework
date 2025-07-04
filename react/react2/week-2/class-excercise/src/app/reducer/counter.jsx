"use client"
import { useContext } from "react"
import styles from "./counter.module.css";
import { CounterContext } from "./CounterContext";
 
export default function Counter(){
    const {state, dispatch} = useContext(CounterContext)
    // const [count,SetCount] = useState(0);

    function increment(){
       dispatch({type : "increment"})
    }

    function decrement(){
           dispatch({type : "decrement"})
    }
      

    return(
        <>
        <button className={styles.button} onClick={decrement}> Decrement</button>
        <span className={styles.span}>{state.count}</span>
        <button className={styles.button} onClick={increment}> Increment</button>
        </>
    )
}