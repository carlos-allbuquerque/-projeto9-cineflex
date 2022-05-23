import ReactDOM from "react-dom";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Sucess from "./components/Sucess";
import "./reset.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./provider/UserContext";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/sessoes/:idSessions" element={<Sessions />} />
                    <Route path="/assentos/:idSeats" element={<Seats />}/>
                    <Route path="/sucesso" element={<Sucess />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));