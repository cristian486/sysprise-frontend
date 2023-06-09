import PaginacaoDinamica from '../../components/Paginacao';
import Tabela from '../../components/Tabela';
import { listaDeEstoqueState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { IEstoque } from '../../types/Estoque';
import { IPageable } from '../../types/IPageable';
import { headersEstoque } from './base/headers';

export default function Estoque() {

    const [listaDeEstoque, _] = useGenericRecoilAtom<IPageable<IEstoque[]>>(listaDeEstoqueState);

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
                listaDeValores={listaDeEstoque.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8086/estoque' atomo={listaDeEstoqueState}  first={listaDeEstoque.first} last={listaDeEstoque.last} />}
            />
        </>
    );
}