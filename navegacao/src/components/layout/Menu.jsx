import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                {/* 123/456 irá substitui o parametro ID (pode ser qualquer valor) */}
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/legal">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                {/* Link que não existe */}
                <li>
                    <Link to="/naoExiste">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)


export default Menu