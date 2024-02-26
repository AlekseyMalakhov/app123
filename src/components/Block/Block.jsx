import classes from "./Block.module.css";

export default function Block({ moving }) {
    return (
        <div className={`${classes.block} ${moving ? classes.moving : ""}`}>
            <div className={classes.number}>1</div>
        </div>
    );
}
