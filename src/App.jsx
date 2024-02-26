import { useState } from "react";
import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Circle from "./components/Circle/Circle";

function App() {
    const [shot, setShot] = useState(false);

    return (
        <main>
            <div className="field">
                <Block moving={true} />
                <Circle shot={shot} />
                <Block moving={false} />
            </div>
            <Button shot={shot} setShot={setShot} />
        </main>
    );
}

export default App;
