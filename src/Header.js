import React from 'react';
import './App.css';

function Header() {
    const name = "Александра";

    return (
        <header>
            <h2>Привет, {name}!</h2>
        </header>
    );
}
export default Header;