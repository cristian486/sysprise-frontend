import useListaDeCompras from '../../state/hooks/listas/useListaDeCompras';
import { ICompra, IItemDaCompra } from '../../types/Compra';
import FormularioDinamico from '../../components/FormularioDinamico';
import Tabela from '../../components/Tabela';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { compraPadrao } from './base/default';
import { headersCompra } from './base/headers';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { atualizarStatusMovimentacaoState, formularioDinamicoState, itensDaCompraState, listaDeComprasState, pessoaDaMovimentacaoState } from '../../state/atom';
import ListaItensDaCompra from '../../components/ListaItensDaCompra';
import ListaDeFornecedores from '../../components/ListaFornecedores';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import AprovarReprovar from '../../components/AprovarReprovar';
import { IAtualizarStatusMovimentacao } from '../../types/AtualizarStatus';
import PaginacaoDinamica from '../../components/Paginacao';

export default function Compra() {
    const listaDeCompras = useListaDeCompras();
    const asyncDetalhamento = useAsyncDetalhamento<ICompra>();
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);
    const [itens, setItensDaCompra] = useGenericRecoilAtom<IItemDaCompra[]>(itensDaCompraState);
    const [pessoa_id, setFornecedorId] = useGenericRecoilAtom<string>(pessoaDaMovimentacaoState);
    const [_, setStatusAtualizacao] =  useGenericRecoilAtom<IAtualizarStatusMovimentacao>(atualizarStatusMovimentacaoState);

    compraPadrao.customFields = [ { label: 'Produtos', name: 'itensDaCompra', component: <ListaItensDaCompra/> }, { label: 'Fornecedor', name: 'fornecedor', component: <ListaDeFornecedores/> }, { label: 'Status da Compra', name: 'status', component: <AprovarReprovar/> }];

    function obterValor(item: ICompra, key: string) {
        let result = String(item[key as keyof ICompra]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8088/compra/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setItensDaCompra(resp.itensDaCompra);
            setStatusAtualizacao({id: (resp.status === 'Finalizado' || resp.status === 'Cancelado' ? 0 : id), url: 'http://localhost:8088/compra'});
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(compraPadrao.initialValues).map((key) => [key, ''])
        );
        setItensDaCompra([]);
        setFornecedorId('0');
        setStatusAtualizacao({id: 0, url: ''});
        compraPadrao.initialValues = valoresLimpos;
        compraPadrao.fields.filter(f => f.name !== 'id' && f.name !== 'observacao').forEach(f => {
            f.options= {
                disabled: false
            };
        });
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values, itens, pessoa_id};
        console.log(obj);
        const useCall = useAsyncCall();
        useCall('http://localhost:8088/compra', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }


    return (
        <>
            <Tabela nomeDaTabela={'Lista de Compras'}
                headers={headersCompra}
                listaDeValores={listaDeCompras.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8088/compra' atomo={listaDeComprasState}  first={listaDeCompras.first} last={listaDeCompras.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={compraPadrao.fields}
                    criar={criar}
                    atualizar={compraPadrao.atualizar}
                    deletar={compraPadrao.deletar}
                    title={compraPadrao.title}
                    customFields={compraPadrao.customFields}
                    initialValues={compraPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}