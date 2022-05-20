import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Films from "./components/Films/Films";
import "./reset.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Films />} />
            </Routes>
        </BrowserRouter>
 
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));