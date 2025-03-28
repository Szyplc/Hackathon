import "./App.css";

function App() {
    fetch("http://127.0.0.1:5001/hackathon-5c94a/us-central1/witaj")
        .then((response) => response.text())
        .then((text) => console.log(text));
    return <div>Start</div>;
}

export default App;
