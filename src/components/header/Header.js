import React from "react";
import logoOcta from './img/logo-octa-mono.png'
import './Header.scss'

const Header = () => (
    <header className="app-header">
        <div className="container">
            <nav className="navbar">
            <a class="navbar-brand" href="https://pt.octadesk.com/" target="_blank">
                <img src={logoOcta} alt="Logo Octadesk" className="mx-auto d-block"/>
            </a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" id="btn-quero-conhecer-header" href="https://app.octadesk.com/sign-up?_gl=1%2a1x3ra1w%2aga4__ga%2aMTY0OTMwMDk4OS4xNjMxNzM4ODkx%2aga4__ga_88PTB7Z07Z%2aMTY0ODY1MDc3OS4zMTkuMS4xNjQ4NjUwNzgwLjU5&_ga=2.71836179.1246785857.1648470960-1649300989.1631738891" target="_blank">Precisa de vários usuários em um só número de WhatsApp? <strong>Teste o Octadesk gratuitamente</strong></a>
                    </li>
                </ul>
            </nav>          
        </div>
    </header>
)

export default Header