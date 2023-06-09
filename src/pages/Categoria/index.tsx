import useListaDeCategorias from '../../state/hooks/listas/useListaDeCategorias';
import { ICategoria } from '../../types/Categoria';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjetos';
import { headersCategoria } from './base/headers';
import { categoriaPadrao } from './base/default';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { formularioDinamicoState, listaDeCategoriasState } from '../../state/atom';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import PaginacaoDinamica from '../../components/Paginacao';


export default function Categoria() {

    const listaDeCategorias = useListaDeCategorias();
    const asyncDetalhamento = useAsyncDetalhamento<ICategoria>();
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);

    function obterValor(item: ICategoria, key: string) {
        const result = String(item[key as keyof ICategoria]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8080/categoria/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(categoriaPadrao.initialValues).map((key) => [key, ''])
        );
        categoriaPadrao.initialValues = valoresLimpos;
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8080/categoria', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function deletar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        const id = obj['id'];
        useCall('http://localhost:8080/categoria/' + id, 'delete', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function atualizar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8080/categoria', 'put', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Categorias'}
                headers={headersCategoria}
                listaDeValores={listaDeCategorias.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8080/categoria' atomo={listaDeCategoriasState}  first={listaDeCategorias.first} last={listaDeCategorias.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={categoriaPadrao.fields}
                    criar={criar}
                    atualizar={atualizar}
                    deletar={deletar}
                    title={categoriaPadrao.title}
                    customFields={categoriaPadrao.customFields}
                    initialValues={categoriaPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}