import "materialize-css";
import { Icon, Navbar, NavItem } from "react-materialize";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";

export default function Header() {
    return (
        <div>
            <Navbar
                class="indigo darken-4"
                alignLinks="right"
                brand={<a className="brand-logo" href="/">Api Rest GitHub</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="/">
                    Home
                </NavItem>
                <NavItem href="/">
                    About me
                </NavItem>
            </Navbar>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Body/>} exact></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}