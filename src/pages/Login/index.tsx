import { useState } from 'react';
import asyncLogin from '../../state/hooks/login/login';
import styles from './Login.module.css';

export default function Login() {

    const loginAsync = asyncLogin();
    const [login, setLogin] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    function loginForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        loginAsync({ login, senha });
    }


    return (
        <div className={styles.container}>
            <div className={`${styles.metadeDaLargura} ${styles.imagemLogin}`}>
            </div>
            <div className={styles.metadeDaLargura}>
                <form method="post" className={styles.formulario} onSubmit={e => loginForm(e)}>
                    <label htmlFor="login">Usuário:</label>
                    <input type="text" name="login" id="login" value={login} onChange={e => setLogin(e.target.value)} />

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="senha" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />

                    <input type="submit" value="Login" className={styles.botaoSubmeter} />
                </form>
            </div>
        </div>
    );
}