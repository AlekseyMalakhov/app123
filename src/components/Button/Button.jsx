import classes from "./Button.module.css";

export default function Button({ shot, setShot }) {
    return (
        <div className={classes.button} onClick={() => setShot(true)}>
            <div className={classes.text}>{shot ? 123 : "Start"}</div>
        </div>
    );
}
