import setFormularioDinamicoState from '../../state/hooks/setFormularioDinamico';
import styles from './FiltroPesquisa.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

export default function FiltroPesquisa() {

    const setFormState = setFormularioDinamicoState();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.metadeLargura}>
                    <select className={styles.select}>
                        <option value="">Filtro...</option>
                        <option value="valor1" >Valor 1</option>
                        <option value="valor2" >Valor 2</option>
                        <option value="valor3" >Valor 3</option>
                    </select>
                    <input type='search' className={styles.barraDePesquisa} placeholder='Insira o valor...' />
                    <button className={`${styles.botaoPesquisa} ${styles.btn_1}`}>Pesquisar</button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} className={styles.metadeLargura}>
                    <button
                        className={`${styles.custom_btn} ${styles.btn_13}`}
                        onClick={() => setFormState(true)}
                    >
                        <AiOutlinePlus style={{ marginRight: '10px' }} />
                        Cadastrar
                    </button>
                </div>
            </div>
        </>
    );
}