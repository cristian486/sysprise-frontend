import Tabela from '../../components/Tabela';
import { IUnidade } from '../../types/Unidade';
import FormularioDinamico from '../../components/FormularioDinamico';
import useListaDeUnidades from '../../state/hooks/listas/useListaDeUnidades';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { unidadePadrao } from './base/default';
import { headersUnidade } from './base/headers';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { formularioDinamicoState, listaDeUnidadesState } from '../../state/atom';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import PaginacaoDinamica from '../../components/Paginacao';

export default function Unidade() {

    const listaDeUnidades = useListaDeUnidades();
    const asyncDetalhamento = useAsyncDetalhamento<IUnidade>();
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);

    function obterValor(item: IUnidade, key: string) {
        const result = String(item[key as keyof IUnidade]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8081/unidade/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(unidadePadrao.initialValues).map((key) => [key, ''])
        );
        unidadePadrao.initialValues = valoresLimpos;
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8081/unidade', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function deletar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        const id = obj['id'];
        useCall('http://localhost:8081/unidade/' + id, 'delete', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function atualizar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8081/unidade', 'put', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Unidades'}
                headers={headersUnidade}
                listaDeValores={listaDeUnidades.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8081/unidade' atomo={listaDeUnidadesState}  first={listaDeUnidades.first} last={listaDeUnidades.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={unidadePadrao.fields}
                    criar={criar}
                    atualizar={atualizar}
                    deletar={deletar}
                    title={unidadePadrao.title}
                    customFields={unidadePadrao.customFields}
                    initialValues={unidadePadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}