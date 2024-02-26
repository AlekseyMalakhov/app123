import classes from "./Circle.module.css";

export default function Circle({ shot }) {
    return <div className={`${classes.circle} ${shot ? classes.shot : classes.init}`}></div>;
}
