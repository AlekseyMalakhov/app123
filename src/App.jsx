import { useState } from "react";
import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Circle from "./components/Circle/Circle";

function App() {
    const [shot, setShot] = useState(false);
    const [coords, setCoords] = useState(null);

    return (
        <main>
            <div className="field">
                <Block moving={true} setCoords={setCoords} number={1} />
                <Block moving={false} number={2} />
                <Circle coords={coords} shot={shot} />
            </div>
            <Button shot={shot} setShot={setShot} />
        </main>
    );
}

export default App;
