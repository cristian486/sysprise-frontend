import styles from './ListaClientes.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { IPessoaFisica, IPessoaJuridica } from '../../types/Pessoa';
import { listaDeClientesState, pessoaDaMovimentacaoState } from '../../state/atom';


export default function ListaDeClientes() {

    const [listaDeFornecedores, _] = useGenericRecoilAtom<IPessoaFisica[] | IPessoaJuridica[]>(listaDeClientesState);
    const [pessoaDaMovimentacao, setpessoaDaMovimentacao] = useGenericRecoilAtom<string>(pessoaDaMovimentacaoState);


    return (
        <select name="pessoa_id"
            value={pessoaDaMovimentacao}
            onChange={(event) => setpessoaDaMovimentacao(event.target.value)}
            className={styles.container}>
            {listaDeFornecedores.map(forn => {

                if ('nomeFantasia' in forn) {
                    const objFornecedor = forn as IPessoaJuridica;
                    return (
                        <option value={objFornecedor.id} key={objFornecedor.id}>
                            {objFornecedor.nomeFantasia}
                        </option>
                    );
                } else {
                    const objFornecedor = forn as IPessoaFisica;
                    return (
                        <option value={objFornecedor.id} key={objFornecedor.id}>
                            {objFornecedor.nome}
                        </option>
                    );
                }
            })}
        </select>
    );
}