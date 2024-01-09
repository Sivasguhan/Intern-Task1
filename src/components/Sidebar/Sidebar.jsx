import { CiText } from "react-icons/ci";
import { GiCircle, GiPencil } from "react-icons/gi";

export default function Sidebar() {
    return (
        <nav class="main-menu">
            <ul>
                <li title="Text Box">
                    <CiText />
                </li>
                <li title="Circle">
                    <GiCircle />
                </li>
                <li title="Draw">
                    <GiPencil />
                </li>
            </ul>
        </nav>
    )
}