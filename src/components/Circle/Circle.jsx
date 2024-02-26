import { useEffect, useRef, useState } from "react";
import classes from "./Circle.module.css";

export default function Circle({ coords }) {
    console.log(coords);
    if (coords) {
        return <div className={`${classes.circle} }`} style={{ left: coords.left, top: coords.top }}></div>;
    }
    return null;
}
