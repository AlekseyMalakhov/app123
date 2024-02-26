import { useEffect, useRef } from "react";
import classes from "./Block.module.css";

export default function Block({ moving, setCoords, number }) {
    const element = useRef(null);

    useEffect(() => {
        if (moving) {
            const intervalRef = setInterval(() => {
                const rect = element.current.getBoundingClientRect();
                const coords = {
                    left: rect.left + 15,
                    top: rect.top - 25,
                };
                setCoords(coords);
            }, 20);
            return () => clearInterval(intervalRef);
        }
    }, [setCoords, moving]);

    return (
        <div className={`${classes.block} ${moving ? classes.moving : ""}`} ref={element}>
            <div className={classes.number}>{number}</div>
        </div>
    );
}
