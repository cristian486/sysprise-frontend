import Tabela from '../../components/Tabela';
import { listaDeEstoqueState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { IEstoque } from '../../types/Estoque';
import { headersEstoque } from './base/headers';

export default function Estoque() {

    const [listaDeEstoque, _] = useGenericRecoilAtom<IEstoque[]>(listaDeEstoqueState);

    console.log(listaDeEstoque);

    function obterValor(item: IEstoque, key: string) {
        const result = String(item[key as keyof IEstoque]);
        return result;
    }

    function clickLinha(id: number) {
        console.log(id);
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Estoque'}
                headers={headersEstoque}
                listaDeValores={listaDeEstoque}
                obterValor={obterValor}
                clickLinha={clickLinha}
            />
        </>
    );
}