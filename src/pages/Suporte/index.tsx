import styles from './Suporte.module.css';
import { AiOutlinePhone, AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

export default function Suporte() {
    return (
        <div className={styles.container}>
            <h1>
                Contatos:
            </h1>
            <address>
                <div>
                    <AiOutlinePhone /> (YY) XXXX-XXXX
                </div>

                <div>
                    <AiFillGithub /> <a href="https://#" rel="noreferrer" target='_blank'>Perfil Github</a>
                </div>

                <div>
                    <AiOutlineMail /> suporte@sysprise.com
                </div>

                <div>
                    <AiFillLinkedin /> <a href="https://#" rel="noreferrer" target='_blank'>Perfil Linkedin</a>
                </div>
            </address>
        </div>
    );
}