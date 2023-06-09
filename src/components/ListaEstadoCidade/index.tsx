import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import useListaDeEstados from '../../state/hooks/listas/useListaDeEstados';
import { ICidade } from '../../types/Cidade';
import { IPageable } from '../../types/IPageable';
import styles from './ListaEstadoCidade.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { IEndereco } from '../../types/Pessoa';
import { cidadeState, enderecoState, estadoState, listaDeCidadesDoEstadoState, listaDeEstadoParaCadastroState } from '../../state/atom';
import { IEstado } from '../../types/Estado';


export default function ListaEstadoCidade() {
    const [listaDeEstados, _] = useGenericRecoilAtom<IEstado[]>(listaDeEstadoParaCadastroState);
    const [cidade, setCidade] = useGenericRecoilAtom<string>(cidadeState);
    const asyncDetalhamento = useAsyncDetalhamento<IPageable<ICidade[]>>();
    const [estado, setEstadoState] = useGenericRecoilAtom<string>(estadoState);
    const [listaDeCidadesDoEstado, setListaDeCidadesDoEstado] = useGenericRecoilAtom<ICidade[]>(listaDeCidadesDoEstadoState);
    const [endereco, setEnderecoState] = useGenericRecoilAtom<IEndereco>(enderecoState);


    function buscarCidadesDoEstado(id: string) {
        setEstadoState(id);
        asyncDetalhamento('http://localhost:8084/cidade', `size=10000000&estadoId=${id}`)
            .then(resp => {
                setListaDeCidadesDoEstado(resp.content);
            })
            .catch(error => console.log(error));
    }



    return (
        <div className={styles.base}>
            <div>
                <label>
                    Estado:
                    <select name='estado'
                        value={estado}
                        className={styles.container}
                        onChange={(event) => buscarCidadesDoEstado(event.target.value)}>

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

            {
                listaDeCidadesDoEstado.length > 0
                &&
                <div>
                    <label>
                        Cidade:
                        <select name='cidade'
                            value={cidade}
                            className={styles.container}
                            onChange={e => {
                                setCidade(e.target.value);
                                setEnderecoState({ ...endereco, cidade_id: e.target.value });
                            }}>
                            {listaDeCidadesDoEstado.map(cid => {
                                return (
                                    <option value={cid.id} key={cid.nome}>
                                        {cid.nome}
                                    </option>
                                );
                            })}
                        </select>
                    </label>
                </div>
            }
        </div>
    );
}