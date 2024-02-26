import classes from "./Circle.module.css";

export default function Circle({ shot }) {
    return <div className={`${classes.circle} ${classes.moving} ${shot ? classes.shot : ""}`}></div>;
}
