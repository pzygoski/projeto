'use client'

import Link from "next/link";
import styles from './Header.module.css';
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const alternarMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <p className={styles.p}>🎹Teclados Musicais🎹</p>
            
            <button onClick={alternarMenu} className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul className={styles.lista}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/sobre">Tipos de Teclados</Link>
                    </li>
                    <li>
                        <Link href="/componentes">Componentes e Funcionalidades</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}