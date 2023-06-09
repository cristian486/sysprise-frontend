import FormularioDinamico from '../../components/FormularioDinamico';
import Tabela from '../../components/Tabela';
import useListaDeVendas from '../../state/hooks/listas/useListaDeVendas';
import { IItemDaVenda, IVenda } from '../../types/Venda';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import ListaItensDaVenda from '../../components/ListaItensDaVenda';
import { vendaPadrao } from './base/default';
import { converterObjetoParaValoresIniciais } from './base/converterObjetos';
import { headersVenda } from './base/headers';
import { atualizarStatusMovimentacaoState, formularioDinamicoState, itensDaVendaState, listaDeVendasState, pessoaDaMovimentacaoState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import ListaDeClientes from '../../components/ListaClientes';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import AprovarReprovar from '../../components/AprovarReprovar';
import { IAtualizarStatusMovimentacao } from '../../types/AtualizarStatus';
import PaginacaoDinamica from '../../components/Paginacao';

export default function Venda() {
    const listaDeVendas = useListaDeVendas();
    const asyncDetalhamento = useAsyncDetalhamento<IVenda>();
    const [itens, setItens] = useGenericRecoilAtom<IItemDaVenda[]>(itensDaVendaState);
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);
    const [pessoa_id, setClienteId] = useGenericRecoilAtom<string>(pessoaDaMovimentacaoState);
    const [_, setStatusAtualizacao] = useGenericRecoilAtom<IAtualizarStatusMovimentacao>(atualizarStatusMovimentacaoState);

    vendaPadrao.customFields = [
        { label: 'Produtos', name: 'itensDaVenda', component: <ListaItensDaVenda /> },
        { label: 'Cliente', name: 'cliente_id', component: <ListaDeClientes /> },
        { label: 'Status da Compra', name: 'status', component: <AprovarReprovar /> }
    ];

    function obterValor(item: IVenda, key: string) {
        let result = String(item[key as keyof IVenda]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8087/venda/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setItens(resp.itensDaVenda);
            setStatusAtualizacao({ id: (resp.status === 'Finalizado' || resp.status === 'Cancelado' ? 0 : id), url: 'http://localhost:8087/venda' });
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(vendaPadrao.initialValues).map((key) => [key, ''])
        );
        setClienteId('0');
        setItens([]);
        setStatusAtualizacao({ id: 0, url: '' });
        vendaPadrao.initialValues = valoresLimpos;
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values, itens, pessoa_id };
        console.log(obj);
        const useCall = useAsyncCall();
        useCall('http://localhost:8087/venda', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Vendas'}
                headers={headersVenda}
                listaDeValores={listaDeVendas.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8087/venda' atomo={listaDeVendasState} first={listaDeVendas.first} last={listaDeVendas.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={vendaPadrao.fields}
                    criar={criar}
                    atualizar={vendaPadrao.atualizar}
                    deletar={vendaPadrao.deletar}
                    title={vendaPadrao.title}
                    customFields={vendaPadrao.customFields}
                    initialValues={vendaPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}