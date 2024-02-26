import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Circle from "./components/Circle/Circle";

function App() {
    return (
        <main>
            <div className="field">
                <Block moving={true} />
                {/* <Circle /> */}
                <Block moving={false} />
            </div>
            <Button />
        </main>
    );
}

export default App;
