import { useEffect, useRef, useState } from "react";
import classes from "./Circle.module.css";

export default function Circle({ shot }) {
    const element = useRef(null);
    const [coords, setCoords] = useState(null);
    const [readyForShot, setReadyForShot] = useState(false);

    // if (shot && element.current && coords) {
    //     setReadyForShot(true);
    // }

    useEffect(() => {
        console.log("check");
        if (shot && element.current && !coords) {
            console.log("1");
            const rect = element.current.getBoundingClientRect();
            const coords = {
                left: rect.left,
                top: rect.top,
            };
            setCoords(coords);
        }
        if (shot && element.current && coords && !readyForShot) {
            console.log("2");
            setReadyForShot(true);
        }
    }, [shot, coords, readyForShot]);

    // console.log(coords);
    // console.log(element.current);
    console.log(readyForShot);

    const getStyle = () => {
        if (shot && coords && !readyForShot) {
            console.log("preapre");
            const res = {
                left: coords.left.toString() + "px",
                top: (coords.top - 50).toString() + "px",
            };
            console.log(res);
            return res;
        }
        if (shot && coords && readyForShot) {
            console.log("fire");
            return {
                left: "calc(100% - 125px)",
                top: "calc(50% - 25px)",
            };
        }
    };

    return <div className={`${classes.circle} ${shot && coords ? "" : classes.moving}`} style={getStyle()} ref={element}></div>;
}
