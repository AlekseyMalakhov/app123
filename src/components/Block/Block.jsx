import Circle from "../Circle/Circle";
import classes from "./Block.module.css";

export default function Block({ moving }) {
    return (
        <div className={`${classes.block} ${moving ? classes.moving : ""}`}>
            {moving ? <Circle /> : null}
            <div className={classes.number}>1</div>
        </div>
    );
}
