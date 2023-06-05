import useListaDeProdutos from '../../state/hooks/listas/useListaDeProdutos';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IProduto } from '../../types/Produto';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import ListaDeCategorias from '../../components/ListaCategorias';
import ListaDeUnidades from '../../components/ListaUnidades';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { produtoPadrao } from './base/default';
import { headersProduto } from './base/headers';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { categoriaState, formularioDinamicoState, unidadeState } from '../../state/atom';

export default function Produto() {
    const listaDeProdutos = useListaDeProdutos();
    const [categoriaDoProduto, definirCategoriaDoProduto] = useGenericRecoilAtom<string>(categoriaState);
    const [unidadeDoProduto, definirUnidadeDoProduto] = useGenericRecoilAtom<string>(unidadeState);
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);
    const asyncDetalhamento = useAsyncDetalhamento<IProduto>();



    produtoPadrao.customFields = [{
        label: 'Categoria',
        name: 'categoria_id',
        component: <ListaDeCategorias />
    },
    {
        label: 'Unidade',
        name: 'unidade_id',
        component: <ListaDeUnidades />
    }];


    function obterValor(item: IProduto, key: string) {
        const result = String(item[key as keyof IProduto]);
        return result;
    }

    function detalhamento(id: number) {
        asyncDetalhamento(`http://localhost:8082/produto/${id}`)
            .then(resp => {
                definirCategoriaDoProduto(resp.categoria.id?.toString() || '0');
                definirUnidadeDoProduto(resp.unidade.id?.toString() || '0');
                converterObjetoParaValoresIniciais(resp);
                setFormState(true);
            }).catch(error => console.log(error));
    }

    function limpar() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(produtoPadrao.initialValues).map((key) => [key, ''])
        );
        definirUnidadeDoProduto('0');
        definirCategoriaDoProduto('0');
        produtoPadrao.initialValues = valoresLimpos;
    }


    function criar(values: { [key: string]: string }) {
        const obj = { ...values, categoria_id: categoriaDoProduto, unidade_id: unidadeDoProduto };
        const useCall = useAsyncCall();
        console.log(obj);
        useCall('http://localhost:8082/produto', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function deletar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        const id = obj['id'];
        useCall('http://localhost:8082/produto/' + id, 'delete', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function atualizar(values: { [key: string]: string }) {
        const obj = { ...values, categoria_id: categoriaDoProduto, unidade_id: unidadeDoProduto };
        const useCall = useAsyncCall();
        useCall('http://localhost:8082/produto', 'put', obj).then(() => location.reload()).catch(error => console.log(error));
    }


    return (
        <>
            <Tabela nomeDaTabela={'Lista de Produtos'}
                headers={headersProduto}
                listaDeValores={listaDeProdutos}
                obterValor={obterValor}
                clickLinha={detalhamento}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={produtoPadrao.fields}
                    criar={criar}
                    atualizar={atualizar}
                    deletar={deletar}
                    title={produtoPadrao.title}
                    customFields={produtoPadrao.customFields}
                    initialValues={produtoPadrao.initialValues}
                    limparValores={limpar}
                />
            }
        </>
    );
}