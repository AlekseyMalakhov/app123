import { useEffect, useState } from "react";
import classes from "./Button.module.css";

export default function Button({ setShot }) {
    const [count, setCount] = useState(5);
    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        if (waiting) {
            let timer;
            if (count > 0) {
                timer = setTimeout(() => setCount(count - 1), 1000);
            } else {
                setWaiting(false);
                setCount(5);
                clearTimeout(timer);
                setShot(false);
            }
        }
    }, [waiting, count, setShot]);

    const start = () => {
        setShot(true);
        setWaiting(true);
    };

    return (
        <div className={classes.button} onClick={start}>
            <div className={classes.text}>{waiting ? count : "Start"}</div>
        </div>
    );
}
