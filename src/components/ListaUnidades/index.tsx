import useListaDeUnidades from '../../state/hooks/listas/useListaDeUnidades';
import styles from './ListaUnidades.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { unidadeState } from '../../state/atom';

export default function ListaDeUnidades() {
    const listaDeUnidades = useListaDeUnidades();
    const [unidadeDoProduto, setUnidade] = useGenericRecoilAtom<string>(unidadeState);

    return (
        <select name="unidade_id"
            value={unidadeDoProduto}
            onChange={(event) => setUnidade(event.target.value)}
            className={styles.container}>
            {listaDeUnidades.map(uni => {
                return (
                    <option value={uni.id} key={uni.nome}>
                        {uni.nome}
                    </option>
                );
            })}
        </select>
    );
}