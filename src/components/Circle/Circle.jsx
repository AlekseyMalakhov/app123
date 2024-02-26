import classes from "./Circle.module.css";

export default function Circle({ shot, coords }) {
    const getStyle = () => {
        if (coords && !shot) {
            return {
                left: coords.left,
                top: coords.top,
                visibility: "hidden",
            };
        }
        if (coords && shot) {
            return {
                left: "calc(100% - 125px)",
                top: "calc(50% - 25px)",
                transition: "all 2s",
            };
        }
    };

    return <div className={classes.circle} style={getStyle()}></div>;
}
