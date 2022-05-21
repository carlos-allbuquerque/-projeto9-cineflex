import ReactDOM from "react-dom";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Sessions from "./components/Sessions"
import "./reset.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:idSessions" element={<Sessions />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));