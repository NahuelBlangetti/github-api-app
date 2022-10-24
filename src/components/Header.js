import "materialize-css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";

export default function Header() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper indigo darken-4">
                    <a href="/" class="brand-logo center">Repositories by GitHub</a>
                </div>
            </nav>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Body />} exact></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}