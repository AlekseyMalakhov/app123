import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Circle from "./components/Circle/Circle";

function App() {
    return (
        <main>
            <div className="field">
                <Block />
                <Circle />
                <Block />
            </div>
            <Button />
        </main>
    );
}

export default App;
