import { estadoState } from '../../state/atom';
import useListaDeEstados from '../../state/hooks/listas/useListaDeEstados';

import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import styles from './Estado.module.css';



export default function Estados() {
    const listaDeEstados = useListaDeEstados();
    const [estado, setEstadoState] = useGenericRecoilAtom<string>(estadoState);

    return (
        <div className={styles.base}>
            <div>
                <label>
                    Estado:
                    <select name='estado'
                        value={estado}
                        className={styles.container}
                        onChange={(event) => setEstadoState(event.target.value)}>

                        {listaDeEstados.map(est => {
                            return (
                                <option value={est.id} key={est.nome}>
                                    {est.sigla}
                                </option>
                            );
                        })}
                    </select>
                </label>
            </div>
        </div>
    );
}