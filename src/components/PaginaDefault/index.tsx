import styles from './PaginaDefault.module.css';
import { Outlet } from 'react-router-dom';
import Navegacao from '../Navegacao';
import PerfilUsuario from '../PerfilUsuario';

export default function PaginaDefault() {
    return (
        <div className={styles.paginaDefault}>
            <header className={styles.header}>
                <PerfilUsuario />
                <Navegacao />
            </header>
            <main className={styles.conteudoPrincipal}>
                <Outlet />
            </main>
        </div>
    );
}