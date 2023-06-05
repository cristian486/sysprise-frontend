import ImagemPerfil from '../../assets/images/perfil2.webp';
import logout from '../../state/hooks/login/logout';
import useDadosUsuarioAutenticado from '../../state/hooks/useDadosUsuarioAutenticado';
import styles from './Usuario.module.css';

export default function PerfilUsuario() {
    const dadosUsuario = useDadosUsuarioAutenticado();
    const useLogout = logout();
    return(
        <div className={styles.container}>
            <div  className={styles.fotoUsuario}>
                <img src={ImagemPerfil} alt="Foto de perfil do usuário"/>
            </div>
            <p>
                {dadosUsuario.nome || 'Cristian'}
            </p>
            <p> 
                <button onClick={() => useLogout()} className={styles.logout}>logout</button>
            </p>
        </div>
    );
}