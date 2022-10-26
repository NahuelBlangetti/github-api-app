import "materialize-css";
import Body from "./Body";

export default function Header() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper indigo darken-4">
                    <a href="/" class="brand-logo center">Repositories by GitHub</a>
                </div>
            </nav>

            <Body />
        </div>
    );
}