import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import "./reset.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} />
            </Routes>
        </BrowserRouter>
 
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));