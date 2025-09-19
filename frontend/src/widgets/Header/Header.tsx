import {Link} from "react-router-dom";
import {HeaderSearchBtn} from "../../components/ui/Button/HeaderSearch/HeaderSearch.tsx"
import logo from '../../assets/img/quntumlogo.svg'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>
            <nav>
                <ul className="flex">
                    <li>
                        <Link to="/">Купить крипту</Link>
                    </li>
                    <li>
                        <Link to="/">Рынки</Link>
                    </li>
                    <li>
                        <Link to="/">Торговля</Link>
                    </li>
                    <li>
                        <Link to="/">Фьючерсы</Link>
                    </li>
                    <li>
                        <Link to="/">Earn</Link>
                    </li>
                    <li>
                        <Link to="/">Подробнее</Link>
                    </li>
                </ul>
                <ul className="left-control">
                    <HeaderSearchBtn />
                </ul>
            </nav>
        </header>
    )
}