import styles from './ListaCategorias.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { ICategoria } from '../../types/Categoria';
import { categoriaState, listaDeCategoriasState } from '../../state/atom';


export default function ListaDeCategorias() {

    const [listaDeCategorias, setListaDeCategorias] = useGenericRecoilAtom<ICategoria[]>(listaDeCategoriasState);
    const [categoriaDoProduto, setCategoria] = useGenericRecoilAtom<string>(categoriaState);


    return (
        <select name="categoria_id"
            value={categoriaDoProduto}
            onChange={(event) => setCategoria(event.target.value)}
            className={styles.container}>
            {listaDeCategorias.map(cat => {
                return (
                    <option value={cat.id} key={cat.nome}>
                        {cat.nome}
                    </option>
                );
            })}
        </select>
    );
}