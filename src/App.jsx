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
                <Block moving={false} />
                <Circle shot={shot} />
            </div>
            <Button shot={shot} setShot={setShot} />
        </main>
    );
}

export default App;
