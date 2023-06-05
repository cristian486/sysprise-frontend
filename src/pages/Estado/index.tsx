import FormularioDinamico from '../../components/FormularioDinamico';
import Tabela from '../../components/Tabela';
import useListaDeEstados from '../../state/hooks/listas/useListaDeEstados';
import { IEstado } from '../../types/Estado';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { estadoPadrao } from './base/default';
import { headersEstado } from './base/headers';
import { formularioDinamicoState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';


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

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Estados'}
                headers={headersEstado}
                listaDeValores={listaDeEstados}
                obterValor={obterValor}
                clickLinha={clickLinha}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={estadoPadrao.fields}
                    criar={estadoPadrao.criar}
                    atualizar={estadoPadrao.atualizar}
                    deletar={estadoPadrao.deletar}
                    title={estadoPadrao.title}
                    customFields={estadoPadrao.customFields}
                    initialValues={estadoPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}