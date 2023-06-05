import ListaEstadoCidade from '../ListaEstadoCidade';
import styles from './Endereco.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { IEndereco } from '../../types/Pessoa';
import { enderecoState } from '../../state/atom';

export default function Endereco() {

    const [endereco, setEnderecoState] = useGenericRecoilAtom<IEndereco>(enderecoState);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setEnderecoState({ ...endereco, [name]: value });
    }

    return (
        <div className={styles.formulario}>
            <label className={styles.grande}>
                Rua:
                <input className={styles.grande} type='text' value={endereco.rua} name='rua' onChange={handleInputChange} />
            </label>

            <label className={styles.medio}>
                Número:
                <input className={styles.medio} type='number' value={endereco.numero} name='numero' onChange={handleInputChange} />
            </label>

            <label className={styles.medio}>
                CEP:
                <input className={styles.medio} type='text' value={endereco.cep} name='cep' onChange={handleInputChange} />
            </label>


            <label className={styles.grande}>
                Bairro:
                <input className={styles.grande} type='text' value={endereco.bairro} name='bairro' onChange={handleInputChange} />
            </label>

            <label className={styles.grande}>
                Complemento:
                <input className={styles.grande} type='text' value={endereco.complemento} name='complemento' onChange={handleInputChange} />
            </label>

            <div className={styles.grande} style={{marginTop: '6%'}}>
                <ListaEstadoCidade />
            </div>
        </div>
    );
}