import FormularioDinamico from '../../components/FormularioDinamico';
import Tabela from '../../components/Tabela';
import useListaDeEstados from '../../state/hooks/listas/useListaDeEstados';
import { IEstado } from '../../types/Estado';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { estadoPadrao } from './base/default';
import { headersEstado } from './base/headers';
import { formularioDinamicoState, listaDeEstadoState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import PaginacaoDinamica from '../../components/Paginacao';
import useAsyncCall from '../../state/hooks/useAsyncCall';


export default function Estado() {
    const listaDeEstados = useListaDeEstados();
    const asyncDetalhamento = useAsyncDetalhamento<IEstado>();
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);

    function obterValor(item: IEstado, key: string) {
        const result = String(item[key as keyof IEstado]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8084/estado/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setFormState(true);

        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(estadoPadrao.initialValues).map((key) => [key, ''])
        );
        estadoPadrao.initialValues = valoresLimpos;
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8084/estado', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function deletar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        const id = obj['id'];
        useCall('http://localhost:8084/estado/' + id, 'delete', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function atualizar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8084/estado', 'put', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Estados'}
                headers={headersEstado}
                listaDeValores={listaDeEstados.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8084/estado' atomo={listaDeEstadoState}  first={listaDeEstados.first} last={listaDeEstados.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={estadoPadrao.fields}
                    criar={criar}
                    atualizar={atualizar}
                    deletar={deletar}
                    title={estadoPadrao.title}
                    customFields={estadoPadrao.customFields}
                    initialValues={estadoPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}