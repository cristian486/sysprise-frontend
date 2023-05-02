import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.codigoHttp}>
                404
            </div>
            <div className={styles.content}>
                <h1>Oooops....</h1>
                <h2>A página requisitada não pode ser encontrada</h2>
            </div>
        </div>
    );
}